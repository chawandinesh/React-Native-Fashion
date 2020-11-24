import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "./components";
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
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
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
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    alignItems: "center",
    marginBottom: 40,
  },
});

export default Subslide;
