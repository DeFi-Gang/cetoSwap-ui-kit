import React from "react";
import { HeaderNavProps } from "./types";
interface Props extends HeaderNavProps {
    isMobile: boolean;
}
declare const HeaderNav: React.FC<Props>;
export default HeaderNav;
