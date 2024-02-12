import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 92 40" {...props}>
      <image width="92" height="40" href="/images/logo.png" />
    </Svg>
  );
};

export default Icon;
