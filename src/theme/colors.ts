import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1F17F7",
  primaryBright: "#2D27C3",
  primaryDark: "#0A0434",
  secondary: "#8E067E",
  secondaryBright: "#D501BB",
  secondaryDark: "#440248",
  success: "#98E31A",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#bc0fc8",
  pulse: "#bc0fc8",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#050317",
  backgroundDisabled: "#0D095A",
  contrast: "#241326",
  invertedContrast: "#FFFFFF",
  input: "#0F0749",
  tertiary: "#f4eff5",
  text: "#FFFFFF",
  textDisabled: "#c0bdc4",
  textSubtle: "#B8B6CB",
  borderColor: "#eae9eb",
  card: "#0F0749",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #ebe6ff 0%, #fdefff 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#bc0fc8",
  background: "green",
  backgroundDisabled: "#423742",
  contrast: "#FFFFFF",
  invertedContrast: "#261325",
  input: "#573f5a",
  primaryDark: "#0098A1",
  tertiary: "#473542",
  text: "#f8e2fc",
  textDisabled: "#6f6171",
  textSubtle: "#d2c4d4",
  borderColor: "#634b63",
  card: "#2c262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #45315c 0%, #542a50 100%)",
  },
};
