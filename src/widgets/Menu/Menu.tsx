import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";

import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { FOOTER_HEIGHT, MENU_HEIGHT } from "./config";
import Avatar from "./Avatar";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

const Wrapper = styled.div`
  position: relative;
  flexdirection: column;
  width: 100%;
  min-height: 100vh;
`;

const StyledNav = styled.nav<{ scrolled: boolean }>`
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0 auto;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme, scrolled }) => (scrolled ? theme.colors.headerBackground : "transparent")};
  z-index: 20;
`;

const StyledNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: 100%;
`;

const BodyWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - ${MENU_HEIGHT}px - ${FOOTER_HEIGHT}px);
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({ account, login, logout, links, profile, children }) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [scrolled, setScrolled] = useState(false);
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

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav scrolled={scrolled}>
        <StyledNavContainer>
          <Logo href={homeLink?.href ?? "/"} />
          <HeaderNav links={links} isMobile={isMobile} />
          <Flex>
            <UserBlock account={account} login={login} logout={logout} />
            {profile && <Avatar profile={profile} />}
          </Flex>
        </StyledNavContainer>
      </StyledNav>
      <BodyWrapper>
        {/*<Panel*/}
        {/*  isPushed={isPushed}*/}
        {/*  isMobile={isMobile}*/}
        {/*  showMenu={showMenu}*/}
        {/*  isDark={isDark}*/}
        {/*  toggleTheme={toggleTheme}*/}
        {/*  langs={langs}*/}
        {/*  setLang={setLang}*/}
        {/*  currentLang={currentLang}*/}
        {/*  cakePriceUsd={cakePriceUsd}*/}
        {/*  pushNav={setIsPushed}*/}
        {/*  links={links}*/}
        {/*  priceLink={priceLink}*/}
        {/*/>*/}
        {children}
        {/*<MobileOnlyOverlay show={false} role="presentation" />*/}
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Menu;
