import { Login } from "../WalletModal/types";
import { IconType } from "./icons/types";

export interface LangType {
  code: string;
  language: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  pushNav: () => void;
}

export interface NavTheme {
  background: string;
  hover: string;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
  openTab?: boolean;
}

export interface NavEntry {
  label: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
}

export interface HeaderNavProps {
  links: Array<NavEntry>;
}

export interface SocialEntry {
  label: string;
  href: string;
  icon: IconType;
}

export interface FooterLinks {
  socialLinks: Array<SocialEntry>;
}

export interface NavProps extends HeaderNavProps, FooterLinks {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
}
