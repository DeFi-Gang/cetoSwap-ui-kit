import { IconType } from "./icons/types";

export const links = [
  {
    label: "Bridge",
    icon: "FarmIcon",
    href: "/ifo/history",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/",
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://pancakeswap.info",
      },
      {
        label: "Tokens",
        href: "https://pancakeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://pancakeswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://pancakeswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      // {
      //   label: "Voting",
      //   href: "https://voting.pancakeswap.finance",
      // },
      {
        label: "Github",
        href: "https://github.com/goosedefi/",
      },
      {
        label: "Docs",
        href: "https://goosedefi.gitbook.io/goose-finance/",
      },
      {
        label: "Blog",
        href: "https://goosefinance.medium.com/",
      },
    ],
  },
];

export const linksCeto = [
  {
    label: "Bridge",
    icon: "FarmIcon",
    href: "/bridge",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "/exchange",
      },
      {
        label: "Liquidity",
        href: "/liquidity",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "/overview",
      },
      {
        label: "Tokens",
        href: "/tokens",
      },
      {
        label: "Pairs",
        href: "/pairs",
      },
      {
        label: "Accounts",
        href: "/accounts",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "TwitterIcon" as IconType,
    href: "https://x.com/sparkswap_",
  },
  {
    label: "Youtube",
    icon: "YoutubeIcon" as IconType,
    href: "https://x.com/sparkswap_",
  },
  {
    label: "Discord",
    icon: "DiscordIcon" as IconType,
    href: "https://x.com/sparkswap_",
  },
  {
    label: "Telegram",
    icon: "TelegramIcon" as IconType,

    href: "https://x.com/sparkswap_",
  },
];

export const MENU_HEIGHT = 80;
export const FOOTER_HEIGHT = 138;
export const FOOTER_HEIGHT_MOBILE = 243;
export const MENU_ENTRY_HEIGHT = 22;
export const SIDEBAR_WIDTH_FULL = 220;

export const CETO_SWAP_DOCS = 'https://docs.cetoswap.com/';
