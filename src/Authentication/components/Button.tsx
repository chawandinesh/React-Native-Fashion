import React from "react";
import { useTheme } from "@shopify/restyle";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Theme } from "./Theme";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}
const Button = ({ variant, label, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.gray;
  const color = variant === "primary" ? theme.colors.white : theme.colors.text;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}> {label} </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Regular",
  },
});

export default Button;
