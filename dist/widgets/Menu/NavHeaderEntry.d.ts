import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
    isInAccordion?: boolean;
}
declare const NavHeaderEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
export { NavHeaderEntry };
