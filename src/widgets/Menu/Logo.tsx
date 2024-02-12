import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { LogoIcon } from "../../components/Svg";

interface Props {
  href: string;
  isFooter?: boolean;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Logo: React.FC<Props> = ({ href, isFooter }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = <LogoIcon width={isFooter ? 171 : 92} />;

  return (
    <>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </>
  );
};

export default Logo;
