import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : "transparent")};
  transition: color 0.4s;
`;

const MobileMenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-start;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textSubtle};
  box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    width: 10px;
    fill: none;
    svg {
      path {
        stroke: ${({ theme, isActive }) => (isActive ? theme.colors.primaryBright : theme.colors.primaryBright)};
      }
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
`;
MobileMenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MobileMenuEntry, LinkLabel };
