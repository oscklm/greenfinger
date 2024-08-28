import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const spacing = {
  $1: 4,
  $2: 8,
  $3: 12,
  $4: 16,
  $5: 20,
  $6: 24,
  $7: 28,
  $8: 32,
  $9: 36,
} as const;

const margin = {
  $1: 2,
  $2: 4,
  $3: 8,
  $4: 12,
  $5: 16,
  $6: 20,
  $7: 24,
  $8: 28,
  $9: 32,
} as const;

const padding = {
  $1: 4,
  $2: 8,
  $3: 12,
  $4: 16,
  $5: 20,
  $6: 24,
  $7: 28,
  $8: 32,
  $9: 36,
} as const;

const borderRadius = {
  $1: 4,
  $2: 8,
  $3: 12,
  $4: 16,
  $5: 20,
  $6: 24,
  $7: 28,
  $8: 32,
  $9: 36,
  $full: 9999,
} as const;

const fontSize = {
  $1: 14,
  $2: 16,
  $3: 18,
  $4: 20,
  $5: 24,
  $6: 28,
  $7: 32,
  $8: 36,
  $9: 40,
} as const;

const fonts = {
  PrimaryHeavy: "SFProRoundedHeavy",
  PrimaryBlack: "SFProRoundedBlack",
  PrimaryBold: "SFProRoundedBold",
  PrimarySemiBold: "SFProRoundedSemibold",
  PrimaryMedium: "SFProRoundedMedium",
  PrimaryRegular: "SFProRoundedRegular",
  PrimaryLight: "SFProRoundedLight",
  PrimaryThin: "SFProRoundedThin",
} as const;

const sharedColors = {
  orange: "#ff9800",

  green$1: "#4caf50",
  green$2: "#66bb6a",
  green$3: "#81c784",
  green$4: "#a5d68e",
  green$5: "#c8e9a8",
  green$6: "#e3f5e1",
  gray$1: "#666666",
  gray$2: "#999999",
  gray$3: "#cccccc",
  gray$4: "#e0e0e0",
  white: "#ffffff",
  black: "#000000",

  background: "#ffffff",
  foreground: "#323232",
  foregroundLight: "#d9d9d9",
} as const;

const lightColors = sharedColors;

const darkColors = sharedColors;

const shared = {
  borderRadius,
  padding,
  margin,
  spacing,
  fontSize,
  fonts,
} as const;

export const lightTheme = {
  colors: lightColors,
  ...shared,
} as const;

export const darkTheme = {
  colors: darkColors,
  ...shared,
} as const;
