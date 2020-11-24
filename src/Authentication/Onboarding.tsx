import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash/src/v1/Hooks";
import { interpolateColor } from "react-native-redash/src/v1/Colors";
import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
const { width } = Dimensions.get("window");
const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const slides = [
    {
      title: "Relaxed",
      subtitle: "Find Your Outfits",
      description:
        "Confused About Your Outfit? Don't worry! Find the best Outfit here! ",
      color: "#BFEAF5",
      picture: require("../../assets/images/1.jpg"),
    },
    {
      title: "Playful",
      subtitle: "Here it First, Wear it First",
      description:
        "Hating the cloths in your wardrobe? Explore hundreds of outfit ideas",
      color: "#E9EDF0",
      picture: require("../../assets/images/2.jpg"),
    },
    {
      title: "Excentric",
      subtitle: "Your Style, Your Way",
      description:
        "Create your individual & unique style and look amazing everyday",
      color: "#9D989C",
      picture: require("../../assets/images/3.jpg"),
    },
    {
      title: "Funky",
      subtitle: "Look Good, Feel Good",
      description:
        "Discover the latest trends in fashion and explore your personality",
      color: "black",
      picture: require("../../assets/images/4.jpg"),
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
          {slides.map(({ title, picture }, index) => (
            <Slide {...{ title, picture }} key={index} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, width)}
                {...{ index, x }}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
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
    // flexDirection: "row",
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    // width,
    height: BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Onboarding;
