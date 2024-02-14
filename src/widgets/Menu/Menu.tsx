import React, { useState, useEffect, useRef, useCallback, FC, memo } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";

import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import Logo from "./Logo";
import UserBlock from "./UserBlock";
import MobileMenuSideBar from "./MobileMenuSideBar";
import Avatar from "./Avatar";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import MenuButton from "./MenuButton";
import { HamburgerCloseIcon, HamburgerIcon } from "./icons";

import { useMatchBreakpoints } from "../../hooks";

import { FOOTER_HEIGHT, FOOTER_HEIGHT_MOBILE, MENU_HEIGHT } from "./config";
import { NavProps } from "./types";

const Wrapper = styled.div`
  position: relative;
  flexdirection: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledNav = styled.nav<{ scrolled: boolean; filledBackground: boolean }>`
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0 auto;
  transition: background-color 0.2s;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme, scrolled, filledBackground }) =>
    scrolled || filledBackground ? theme.colors.background : "transparent"};
  z-index: 20;
`;

const StyledNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 30px;
  }
`;

const BodyWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - ${MENU_HEIGHT}px - ${FOOTER_HEIGHT_MOBILE}px);
  ${({ theme }) => theme.mediaQueries.sm} {
    min-height: calc(100vh - ${MENU_HEIGHT}px - ${FOOTER_HEIGHT}px);
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

const Menu: FC<NavProps> = ({ account, login, logout, links, socialLinks, profile, children }) => {
  const { isXs, isSm, isMd } = useMatchBreakpoints();
  const isMobile = isXs || isSm || isMd;

  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, seIsMobileMenuOpen] = useState(false);
  const [filledBackground, setFilledBackground] = useState(false);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;

      setScrolled(currentOffset > 0); // Update scrolled state based on scroll position
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const handleOpenAccordion = useCallback((close?: boolean) => {
    if (close) {
      setFilledBackground(false);
      return;
    }
    const currentOffset = window.pageYOffset;
    if (currentOffset === 0) {
      setFilledBackground(true);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    seIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMobileOverlayClick = useCallback(() => {
    seIsMobileMenuOpen(false);
  }, []);

  const handleMobileMenuClick = useCallback(() => {
    seIsMobileMenuOpen(false);
  }, []);

  return (
    <Wrapper>
      <StyledNav scrolled={scrolled} filledBackground={filledBackground || isMobileMenuOpen}>
        <StyledNavContainer>
          <Logo href={homeLink?.href ?? "/"} />
          {isMobile ? (
            <>
              <MenuButton aria-label="Toggle menu" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <HamburgerCloseIcon width="24px" color="textSubtle" />
                ) : (
                  <HamburgerIcon width="24px" color="textSubtle" />
                )}
              </MenuButton>
            </>
          ) : (
            <>
              <HeaderNav links={links} handleOpenAccordion={handleOpenAccordion} />
              <Flex>
                <UserBlock account={account} login={login} logout={logout} />
                {profile && <Avatar profile={profile} />}
              </Flex>
            </>
          )}
        </StyledNavContainer>
      </StyledNav>
      <BodyWrapper>
        {isMobile && (
          <MobileMenuSideBar
            showMenu={isMobileMenuOpen}
            pushNav={handleMobileMenuClick}
            links={links}
            account={account}
            login={login}
            logout={logout}
            profile={profile}
          />
        )}

        {children}
        <MobileOnlyOverlay show={isMobileMenuOpen} onClick={handleMobileOverlayClick} role="presentation" />
      </BodyWrapper>
      <Footer socialLinks={socialLinks} logoLink={homeLink?.href ?? "/"} />
    </Wrapper>
  );
};

export default memo(Menu);
