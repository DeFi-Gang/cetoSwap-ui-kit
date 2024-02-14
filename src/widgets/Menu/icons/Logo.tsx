import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const LogoFooter: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 171 74" {...props}>
      <image width="171" height="74" href="/images/logo.png" />
    </Svg>
  );
};

export default LogoFooter;
