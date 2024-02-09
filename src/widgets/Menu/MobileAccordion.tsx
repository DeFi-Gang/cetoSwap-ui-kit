import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { LinkLabel } from "./MenuEntry";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";
import { MobileMenuEntry } from "./MobileMenuEntry";

interface Props {
  label: string;
  initialOpenState?: boolean;
  className?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${({ isOpen }) => (isOpen ? "8px 0" : 0)};
`;

const MobileAccordion: React.FC<Props> = ({ label, initialOpenState = false, children, className }) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <MobileMenuEntry onClick={handleClick} className={className}>
        <LinkLabel>{label}</LinkLabel>
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MobileMenuEntry>
      <AccordionContent isOpen={isOpen} maxHeight={React.Children.count(children) * (MENU_ENTRY_HEIGHT + 8) + 16}>
        {children}
      </AccordionContent>
    </Container>
  );
};

export default MobileAccordion;
