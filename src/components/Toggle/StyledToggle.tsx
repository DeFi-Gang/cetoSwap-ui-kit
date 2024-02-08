import styled from "styled-components";
import { lightColors } from "../../theme";

export const Handle = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  cursor: pointer;
  height: 16px;
  left: 4px;
  position: absolute;
  top: 4px;
  transition: left 200ms ease-in;
  width: 16px;
  z-index: 1;
`;

export const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: calc(100% - 18px);
    background: ${lightColors.text};
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledToggle = styled.div<{ checked: boolean }>`
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "primary" : "background"]};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: 24px;
  position: relative;
  transition: background-color 200ms;
  width: 52px;
`;

export default StyledToggle;
