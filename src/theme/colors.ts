import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#bc0fc8",
  primaryBright: "#bc0fc8",
  primaryDark: "#bc0fc8",
  secondary: "#bc0fc8",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#bc0fc8",
  pulse: "#bc0fc8",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#ebe9eb",
  contrast: "#241326",
  invertedContrast: "#FFFFFF",
  input: "#f3eaf4",
  tertiary: "#f4eff5",
  text: "#bc0fc8",
  textDisabled: "#c0bdc4",
  textSubtle: "#ba80b5",
  borderColor: "#eae9eb",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #ebe6ff 0%, #fdefff 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#bc0fc8",
  background: "#353135",
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
