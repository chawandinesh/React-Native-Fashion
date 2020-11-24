import { createText, createTheme } from "@shopify/restyle";

const theme = {
  colors: {
    primary: "#2CB9B0",
    title: "#0C0D34",
    text: "rgba(12,13,52,0.7)",
    white: "#fff",
    gray: "rgba(12,13,52,0.05)",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
  textVarients: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title: {
      fontSize: 28,
      fontFamily: "SFProtext-SemiBold",
      color: "#0C0D34",
    },
    title1: {
      fontSize: 24,
      fontFamily: "SFProtext-SemiBold",
      color: "#0C0D34",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProtext-SemiBold",
      color: "#0C0D34",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProtext-Regular",
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
