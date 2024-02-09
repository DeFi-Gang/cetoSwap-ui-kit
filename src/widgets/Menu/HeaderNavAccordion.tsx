import React, { FC, memo, PropsWithChildren } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";
import { NavHeaderEntry } from "./NavHeaderEntry";

interface Props extends PropsWithChildren<unknown> {
  label: string;
  className?: string;
  isOpen: boolean;
  handleClick: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
  position: relative;
  height: ${MENU_ENTRY_HEIGHT}px;
`;

const AccordionContent = styled.div<{ isOpen: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out, padding 0.3s ease-in;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  border-radius: 4px;
  min-width: 220px;
  top: 50px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ isOpen }) => (isOpen ? `16px` : 0)};
`;

const HeaderNavAccordion: FC<Props> = ({ label, isOpen, handleClick, children, className }) => {
  return (
    <Container>
      <NavHeaderEntry onClick={handleClick} className={className}>
        {label}
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </NavHeaderEntry>
      <AccordionContent isOpen={isOpen} maxHeight={(React.Children.count(children) + 8) * MENU_ENTRY_HEIGHT + 32}>
        {children}
      </AccordionContent>
    </Container>
  );
};

export default memo(HeaderNavAccordion);
