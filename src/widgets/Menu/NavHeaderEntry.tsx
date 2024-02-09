import styled, { DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const NavHeaderEntry = styled.div<Props>`
  cursor: pointer;
  border: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  height: ${MENU_ENTRY_HEIGHT}px;
  gap: 4px;
  display: flex;
  align-items: center;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.tertiary)};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: 600;
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
    color: ${({ theme }) => theme.colors.primaryBright};
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.primaryBright};
      }
    }
  }

  // Safari fix
  flex-shrink: 0;
`;
NavHeaderEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { NavHeaderEntry };
