import Metamask from "./icons/Metamask";
import WalletConnect from "./icons/WalletConnect";
import { Config } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "metamask",
  },
  {
    title: "Wallet Connect",
    icon: WalletConnect,
    connectorId: "walletconnect",
  },
  {
    title: "Coinbase Wallet",
    fallbackImage: "/images/wallets/coinbase.png",
    connectorId: "walletlink",
  },
  {
    title: "Brave Wallet",
    fallbackImage: "/images/wallets/brave.png",
    connectorId: "injected",
  },
  {
    title: "Injected (Other)",
    fallbackImage: "/images/wallets/other.png",
    connectorId: "injected",
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
