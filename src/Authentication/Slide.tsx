import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { Text } from "./components/Theme";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;
interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

function Slide({ title, right, picture }: SlideProps) {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  picture: {
    width: width,
    height: SLIDE_HEIGHT,
    alignSelf: "center",
    borderBottomRightRadius: BORDER_RADIUS,
  },
});

export default Slide;
