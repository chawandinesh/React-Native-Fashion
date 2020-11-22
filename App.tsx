import * as React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding, Welcome } from "./src/Authentication";
import { LoadAssets } from "./src/Authentication/components";
import { NavigationContainer } from "@react-navigation/native";

const AuthenticationStack = createStackNavigator();

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const navigationOptions: {} = {
  headerTitleStyle: {
    textAlign: "center",
  },
};
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={navigationOptions}
      />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};
export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
