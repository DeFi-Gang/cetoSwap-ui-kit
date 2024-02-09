import React, { FC, memo } from "react";
import styled from "styled-components";
import { FOOTER_HEIGHT, FOOTER_HEIGHT_MOBILE } from "./config";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${FOOTER_HEIGHT_MOBILE}px;
  border-top: 1px solid white;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.mediaQueries.sm} {
    height: ${FOOTER_HEIGHT}px;
  }
`;

const Footer: FC = () => {
  return <Container>Footer</Container>;
};

export default memo(Footer);
