import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./components/Button";

interface SubslideProps {
  description: string;
  subtitle: string;
  last?: boolean;
  onPress: () => void;
}
const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        {...{ onPress }}
        label={last ? "Let's get Started" : "Next"}
        variant={last ? "primary" : "default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: "#0C0D34",
    textAlign: "center",
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    alignItems: "center",
    marginBottom: 40,
  },
});

export default Subslide;
