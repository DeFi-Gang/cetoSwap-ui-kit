import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 13 8" {...props}>
      <path
        d="M1.81836 6.66699L6.81836 1.66699L11.8184 6.66699"
        stroke="#E9E9E9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
