import { BaseTheme, createText } from "@shopify/restyle";

const theme: BaseTheme = {
  colors: {
    primary: "#2CB9B0",
    title: "#0C0D34",
    text: "rgba(12,13,52,0.7)",
    white: "white",
    gray: "rgba(12,13,52,0.05)",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Bold",
      color: "white",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      color: "text",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
    },
    Button: {
      fontFamily: "SFProtext-Regular",
    },
  },
  breakPoints: {},
};
export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
