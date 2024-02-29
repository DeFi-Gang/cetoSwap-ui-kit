import React, { FC } from "react";
import styled from "styled-components";

import MobileMenuBody from "./MobileMenulBody";
import UserBlock from "./UserBlock";
import Avatar from "./Avatar";
import { Login } from "../WalletModal";

import { MENU_HEIGHT, SIDEBAR_WIDTH_FULL } from "./config";
import { HeaderNavProps, Profile, PushedProps } from "./types";

interface Props extends HeaderNavProps, PushedProps {
  showMenu: boolean;
  account?: string;
  login: Login;
  logout: () => void;
  profile?: Profile;
}

const StyledPanel = styled.div<{ showMenu: boolean }>`
  position: fixed;
  top: ${MENU_HEIGHT}px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.background};
  width: ${({ showMenu }) => (showMenu ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: calc(100vh - ${MENU_HEIGHT}px);
  transition: padding-top 0.2s, width 0.2s;
  z-index: 20;
  overflow: ${({ showMenu }) => (showMenu ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  padding: ${({ showMenu }) => (showMenu ? "16px 0" : 0)};
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const MobileMenuSideBar: FC<Props> = (props) => {
  const { showMenu, account, login, logout, profile } = props;
  return (
    <StyledPanel showMenu={showMenu}>
      <MobileMenuBody {...props} />
      <StyledFlex>
        <UserBlock account={account} login={login} logout={logout} />
        {profile && <Avatar profile={profile} />}
      </StyledFlex>
    </StyledPanel>
  );
};

export default MobileMenuSideBar;
