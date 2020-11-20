import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash/src/v1/Hooks";
import { interpolateColor } from "react-native-redash/src/v1/Colors";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;
const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const slides = [
    {
      title: "Relaxed",
      subtitle: "Find Your Outfits",
      description:
        "Confused About Your Outfit? Don't worry! Find the best Outfit here! ",
      color: "#BFEAF5",
    },
    {
      title: "Playful",
      subtitle: "Here it First, Wear it First",
      description:
        "Hating the cloths in your wardrobe? Explore hundreds of outfit ideas",
      color: "#BEECC4",
    },
    {
      title: "Excentric",
      subtitle: "Your Style, Your Way",
      description:
        "Create your individual & unique style and look amazing everyday",
      color: "#FFE4D9",
    },
    {
      title: "Funky",
      subtitle: "Look Good, Feel Good",
      description:
        "Discover the latest trends in fashion and explore your personality",
      color: "#FFDDDD",
    },
  ];
  const { x, scrollHandler } = useScrollHandler();
  const backgroundColor: any = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: slides.map((e) => e.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide {...{ title }} key={index} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, width)}
                {...{ index, x }}
              />
            ))}
          </View>

          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({ x: width * (index + 1), animated: true });
                }
              }}
              key={index}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: BORDER_RADIUS,
    flexDirection: "row",
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Onboarding;
