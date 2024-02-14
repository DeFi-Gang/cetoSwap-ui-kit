import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 13 8" {...props}>
      <path
        d="M11.6504 1.33301L6.65039 6.33301L1.65039 1.33301"
        stroke="#E9E9E9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
