import styled from "styled-components";
import { space } from "styled-system";
import { CardProps } from "./types";

import { StyledCardProps } from "./StyledCard";

const getBorderColor = ({ isActive, isSuccess, isWarning, isDisabled, theme }: StyledCardProps) => {
  if (isDisabled) {
    return theme.colors.textDisabled;
  }

  if (isWarning) {
    return theme.colors.failure;
  }

  if (isSuccess) {
    return theme.colors.success;
  }

  if (isActive) {
    return theme.colors.primary;
  }

  return theme.colors.primary;
};

const CardFooter = styled.div<CardProps>`
  border-top: 1px;
  border-style: solid;
  border-top-color: ${getBorderColor};
  ${space}
`;

CardFooter.defaultProps = {
  p: "24px",
};

export default CardFooter;
