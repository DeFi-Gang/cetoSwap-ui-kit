import { FC } from "react";
import { Login } from "../WalletModal";
import { HeaderNavProps, Profile, PushedProps } from "./types";
interface Props extends HeaderNavProps, PushedProps {
    showMenu: boolean;
    account?: string;
    login: Login;
    logout: () => void;
    profile?: Profile;
}
declare const MobileMenuSideBar: FC<Props>;
export default MobileMenuSideBar;
