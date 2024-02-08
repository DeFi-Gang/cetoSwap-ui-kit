import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.card,
  boxShadow: shadows.default,
  boxShadowActive: shadows.active,
  boxShadowDisabled: shadows.disabled,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: lightColors.background,
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: shadows.default,
  boxShadowActive: shadows.active,
  boxShadowDisabled: shadows.disabled,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: lightColors.background,
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
