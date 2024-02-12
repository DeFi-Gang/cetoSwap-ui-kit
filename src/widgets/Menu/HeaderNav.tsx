import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { NavHeaderEntry } from "./NavHeaderEntry";
import NavLinkHeader from "./NavLink";
import HeaderNavAccordion from "./HeaderNavAccordion";

import { HeaderNavProps } from "./types";

interface Props extends HeaderNavProps {
  handleOpenAccordion: (close?: boolean) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const HeaderNav: React.FC<Props> = ({ links, handleOpenAccordion }) => {
  const location = useLocation();
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const handleClick = useCallback(
    (index: number, fromAccordion?: boolean) => {
      setOpenAccordionIndex(openAccordionIndex === index ? null : index);
      if (!fromAccordion) {
        handleOpenAccordion(true);
      } else {
        handleOpenAccordion(openAccordionIndex === index);
      }
    },
    [handleOpenAccordion, openAccordionIndex]
  );

  return (
    <Container>
      {links.map((entry, index) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <HeaderNavAccordion
              isOpen={openAccordionIndex === index}
              handleClick={() => handleClick(index, true)}
              key={entry.label}
              label={entry.label}
              className={calloutClass}
            >
              {entry.items.map((item) => (
                <NavHeaderEntry key={item.href} secondary isActive={item.href === location.pathname}>
                  {item.openTab ? (
                    <NavLinkHeader target="_blank" href={item.href}>
                      {item.label}
                    </NavLinkHeader>
                  ) : (
                    <NavLinkHeader href={item.href}>{item.label}</NavLinkHeader>
                  )}
                </NavHeaderEntry>
              ))}
            </HeaderNavAccordion>
          );
        }
        return (
          <NavHeaderEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <NavLinkHeader href={entry.href} onClick={() => handleClick(index)}>
              {entry.label}
            </NavLinkHeader>
          </NavHeaderEntry>
        );
      })}
    </Container>
  );
};

export default HeaderNav;
