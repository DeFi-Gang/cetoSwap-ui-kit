import { ButtonTheme, variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUBTLE, SUCCESS } = variants;

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.primary,
    backgroundActive: lightColors.input,
    backgroundHover: lightColors.primaryBright,
    border: 0,
    borderColorHover: "transparent",
    boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    color: lightColors.text,
  },
  [SECONDARY]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: lightColors.backgroundDisabled,
    border: `2px solid ${lightColors.primary}`,
    borderColorHover: lightColors.primaryBright,
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.text,
  },
  [TERTIARY]: {
    background: lightColors.secondaryBright,
    backgroundActive: lightColors.secondaryDark,
    backgroundHover: lightColors.secondary,
    border: `2px solid ${lightColors.secondary}`,
    borderColorHover: "transparent",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.text,
  },
  [TEXT]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: lightColors.primaryDark,
    border: 0,
    borderColorHover: "transparent",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.text,
  },
  [DANGER]: {
    background: lightColors.failure,
    backgroundActive: lightColors.failureDark,
    backgroundHover: lightColors.failureBright,
    border: 0,
    borderColorHover: "transparent",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [SUBTLE]: {
    background: lightColors.primary,
    backgroundActive: lightColors.primaryDark,
    backgroundHover: lightColors.primaryBright,
    border: 0,
    borderColorHover: "transparent",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: lightColors.successDark,
    backgroundHover: lightColors.successBright,
    border: 0,
    borderColorHover: "transparent",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.tertiary,
    color: darkColors.primary,
  },
  [TEXT]: {
    ...light.text,
    backgroundHover: darkColors.tertiary,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUBTLE]: {
    ...light.subtle,
  },
  [SUCCESS]: {
    ...light.success,
  },
};
