import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { LinkLabel, MobileMenuEntry } from "./MobileMenuEntry";
import MenuLink from "./MenuLink";
import MobileAccordion from "./MobileAccordion";

import { HeaderNavProps, PushedProps } from "./types";

interface Props extends HeaderNavProps, PushedProps {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 8px;
`;

const MobileMenuBody: React.FC<Props> = ({ pushNav, links }) => {
  const location = useLocation();

  return (
    <Container>
      {links.map((entry) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <MobileAccordion
              key={entry.label}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
            >
              {entry.items.map((item) => (
                <MobileMenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={pushNav}>
                  {item.openTab ? (
                    <MenuLink target="_blank" href={item.href}>
                      {item.label}
                    </MenuLink>
                  ) : (
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  )}
                </MobileMenuEntry>
              ))}
            </MobileAccordion>
          );
        }
        return (
          <MobileMenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={pushNav}>
              <LinkLabel>{entry.label}</LinkLabel>
            </MenuLink>
          </MobileMenuEntry>
        );
      })}
    </Container>
  );
};

export default MobileMenuBody;
