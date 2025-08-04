import { create } from "storybook/theming";

export default create({
  base: "light", // or 'dark'

  // Brand
  brandTitle: "Credo Component Library",
  brandUrl: "https://app.credocentral.com",
  brandImage: "/credo.svg",
  brandTarget: "_blank",

  // Typography
  fontBase: "Outfit, sans-serif",

  // Colors
  colorPrimary: "#0765FF",
  colorSecondary: "#0765FF", // Complementary color

  // UI colors
  appBg: "#F2F4F7",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#e5e7eb",
  appBorderRadius: 8,

  // Sidebar colors
  barBg: "#F2F4F7",
  barTextColor: "#374151",
  barSelectedColor: "#0765FF",
  barHoverColor: "#0765FF", // "#ECF2FF",

  // Text colors
  textColor: "#1f2937",
  textInverseColor: "#ffffff",
  textMutedColor: "#6b7280",

  // Toolbar colors
  buttonBg: "#f3f4f6",
  buttonBorder: "#d1d5db",
  booleanBg: "#d1d5db",
  booleanSelectedBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#d1d5db",
  inputTextColor: "#1f2937",
  inputBorderRadius: 6,
});
