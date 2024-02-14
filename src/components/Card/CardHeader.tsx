import styled from "styled-components";
import { space } from "styled-system";

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

const CardHeader = styled.div<StyledCardProps>`
  background: ${({ theme }) => theme.card.cardHeaderBackground};
  border-bottom: 1px;
  border-style: solid;
  border-bottom-color: ${getBorderColor};
  ${space}
`;

CardHeader.defaultProps = {
  p: "24px",
};

export default CardHeader;
