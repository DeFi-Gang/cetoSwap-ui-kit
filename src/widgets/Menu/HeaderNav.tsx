import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { NavHeaderEntry } from "./NavHeaderEntry";
import NavLinkHeader from "./NavLink";
import HeaderNavAccordion from "./HeaderNavAccordion";

import { HeaderNavProps } from "./types";

interface Props extends HeaderNavProps {
  isMobile: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const HeaderNav: React.FC<Props> = ({ isMobile, links }) => {
  const location = useLocation();
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const handleClick = useCallback(
    (index: number) => {
      if (!isMobile) {
        setOpenAccordionIndex(openAccordionIndex === index ? null : index);
      }
    },
    [isMobile, openAccordionIndex]
  );

  return (
    <Container>
      {links.map((entry, index) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <HeaderNavAccordion
              isOpen={openAccordionIndex === index}
              handleClick={() => handleClick(index)}
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
