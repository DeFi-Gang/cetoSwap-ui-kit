import React, { FC, memo } from "react";
import styled from "styled-components";
import { FOOTER_HEIGHT } from "./config";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${FOOTER_HEIGHT}px;
  background-color: red;
`;

const Footer: FC = () => {
  return <Container>Footer</Container>;
};

export default memo(Footer);
