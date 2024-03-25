import React, { FC, memo } from "react";
import styled from "styled-components";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import { Link } from "../../components/Link";
import CopyToClipboard from "../WalletModal/CopyToClipboard";
import Logo from "./Logo";
import { CETO_SWAP_DOCS, FOOTER_HEIGHT, FOOTER_HEIGHT_MOBILE } from "./config";
import { FooterLinks } from "./types";

const StyledFooter = styled.footer`
  width: 100%;
  border-top: 1px solid;
  border-top-color: ${({ theme }) => theme.colors.card};
  background-color: ${({ theme }) => theme.colors.background};
  height: ${FOOTER_HEIGHT_MOBILE}px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: ${FOOTER_HEIGHT}px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 15px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 30px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialLinksWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    align-items: flex-end;
  }
`;

const Rights = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const Docs = styled.span`
    gap: 4px;
    font-weight: 400;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};

    svg {
        fill: white;
    }
`;


const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

interface Props extends FooterLinks {
  logoLink: string;
}
const Footer: FC<Props> = ({ socialLinks, logoLink }) => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <Container>
        <Logo href={logoLink} isFooter />
        <RightBlock>
          <SocialLinksWrap>
            {socialLinks.map((social) => {
              const Icon = Icons[social.icon];
              const iconProps = { width: "32px", color: "textSubtle", style: { cursor: "pointer" } };

              return (
                <Link external key={social.label} href={social.href} aria-label={social.label}>
                  <Icon {...iconProps} />
                </Link>
              );
            })}
          </SocialLinksWrap>


          <Docs>
            <Link color="text" bold={false} external href={CETO_SWAP_DOCS}>Documents</Link>
            <CopyToClipboard toCopy={CETO_SWAP_DOCS} />
          </Docs>

          <Rights> © {currentYear} CetoSwap. All rights reserved.</Rights>
        </RightBlock>
      </Container>
    </StyledFooter>
  );
};

export default memo(Footer);
