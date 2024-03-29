import { DefaultTheme } from "styled-components";
import { CardProps } from "./types";
export interface StyledCardProps extends CardProps {
    theme: DefaultTheme;
}
declare const StyledCard: import("styled-components").StyledComponent<"div", DefaultTheme, StyledCardProps, never>;
export default StyledCard;
