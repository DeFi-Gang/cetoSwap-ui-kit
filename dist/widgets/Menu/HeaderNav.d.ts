import React from "react";
import { HeaderNavProps } from "./types";
interface Props extends HeaderNavProps {
    handleOpenAccordion: (close?: boolean) => void;
}
declare const HeaderNav: React.FC<Props>;
export default HeaderNav;
