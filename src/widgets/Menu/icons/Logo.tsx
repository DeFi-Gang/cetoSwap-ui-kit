import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Logo: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 220 50" {...props}>
      <image width="220" height="50" href="/images/logo-menu-light.png" />
    </Svg>
  );
};

export default Logo;
