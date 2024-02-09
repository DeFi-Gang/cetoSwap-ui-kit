import { Login } from "../WalletModal/types";
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
    isPushed: boolean;
    pushNav: (isPushed: boolean) => void;
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
export interface MenuEntry {
    label: string;
    icon: string;
    items?: MenuSubEntry[];
    href?: string;
    calloutClass?: string;
    initialOpenState?: boolean;
}
export interface PanelProps {
    isDark: boolean;
    toggleTheme: (isDark: boolean) => void;
    cakePriceUsd?: number;
    currentLang: string;
    langs: LangType[];
    setLang: (lang: LangType) => void;
    links: Array<MenuEntry>;
    priceLink: string;
}
export interface NavProps extends HeaderNavProps {
    account?: string;
    login: Login;
    profile?: Profile;
    logout: () => void;
}
export interface HeaderNavProps {
    links: Array<NavEntry>;
}
export interface NavEntry {
    label: string;
    items?: MenuSubEntry[];
    href?: string;
    calloutClass?: string;
    initialOpenState?: boolean;
}
