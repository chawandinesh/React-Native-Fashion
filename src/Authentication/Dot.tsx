import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";

interface DotProps {
  index: Number;
  currentIndex: Animated.Node<number>;
}
const Dot = ({ index, currentIndex }: DotProps) => {
  return (
    <Animated.View
      style={{
        backgroundColor: "#2CB9B0",
        width: 8,
        height: 8,
        borderRadius: 4,
      }}
    >
      <Text></Text>
    </Animated.View>
  );
};

export default Dot;
