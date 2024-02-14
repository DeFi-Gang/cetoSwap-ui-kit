import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { NavHeaderEntry } from "./NavHeaderEntry";
import NavLinkHeader from "./NavLink";
import HeaderNavAccordion from "./HeaderNavAccordion";

import { HeaderNavProps } from "./types";
import Overlay from "../../components/Overlay/Overlay";

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
  const ref = useRef<HTMLDivElement>(null);

  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const handleClick = useCallback(
    (index: number, fromAccordion?: boolean) => {
      setOpenAccordionIndex(openAccordionIndex === index ? null : index);
      if (!fromAccordion) {
        setOpenAccordionIndex(null);
        handleOpenAccordion(true);
      } else {
        handleOpenAccordion(openAccordionIndex === index);
      }
    },
    [handleOpenAccordion, openAccordionIndex]
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && event.target && !ref.current.contains(event.target as Node)) {
        setOpenAccordionIndex(null);
        handleOpenAccordion(true);
      }
    },
    [ref, setOpenAccordionIndex, handleOpenAccordion]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <Container>
      {links.map((entry, index) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <div ref={ref}>
              <HeaderNavAccordion
                isOpen={openAccordionIndex === index}
                handleClick={() => handleClick(index, true)}
                key={entry.label}
                label={entry.label}
                className={calloutClass}
              >
                {entry.items.map((item) => (
                  <NavHeaderEntry
                    isInAccordion
                    key={item.href}
                    secondary
                    isActive={item.href === location.pathname}
                    onClick={() => handleClick(index)}
                  >
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
            </div>
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
