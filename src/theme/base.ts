import { MediaQueries, Breakpoints, Spacing } from "./types";

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

export const shadows = {
  default: "0px 0px 0px 1px #1F17F7, 0px 0px 0px 0px rgba(49,208,170,0.2)",
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: "0px 0px 0px 1px #1F17F7, 0px 0px 4px 8px rgba(23,25,127, 0.4)",
  success: "0px 0px 0px 1px #98E31A, 0px 0px 4px 8px rgba(102, 191, 60, 0.29)",
  warning: "0px 0px 0px 1px #CD1B3E, 0px 0px 4px 8px rgba(207, 33, 33, 0.2)",
  focus: "0px 0px 0px 1px #1F17F7, 0px 0px 2px 4px rgba(23,25,127, 0.4)",
  inset: "inset 0px 0px 0 1px #1F17F7",
  disabled: "0px 0px 0px 1px #c0bdc4, 0px 0px 4px 8px rgba(199, 211, 193, 0.29)",
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: "4px",
  default: "16px",
  card: "32px",
  circle: "50%",
};

const zIndices = {
  dropdown: 10,
  modal: 100,
};

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
};
