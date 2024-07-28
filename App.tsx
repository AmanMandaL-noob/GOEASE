const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone14Pro from "./screens/IPhone14Pro";
import IPhone14Pro1 from "./screens/IPhone14Pro1";
import IPhone14Pro2 from "./screens/IPhone14Pro2";
import IPhone14Pro3 from "./screens/IPhone14Pro3";
import IPhone14Pro4 from "./screens/IPhone14Pro4";
import IPhone14Pro5 from "./screens/IPhone14Pro5";
import IPhone14Pro6 from "./screens/IPhone14Pro6";
import Component from "./components/Component";
import IPhone14Pro7 from "./screens/IPhone14Pro7";
import IPhone14Pro8 from "./screens/IPhone14Pro8";
import IPhone1415Pro from "./screens/IPhone1415Pro";
import IconMapMarker from "./components/IconMapMarker";
import IPhone1415Pro1 from "./screens/IPhone1415Pro1";
import IPhone1415Pro2 from "./screens/IPhone1415Pro2";
import IPhone1415Pro3 from "./screens/IPhone1415Pro3";
import IPhone14Pro9 from "./components/IPhone14Pro9";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "JetBrainsMono-Light": require("./assets/fonts/JetBrainsMono-Light.ttf"),
    "JetBrainsMono-Regular": require("./assets/fonts/JetBrainsMono-Regular.ttf"),
    "JetBrainsMono-Medium": require("./assets/fonts/JetBrainsMono-Medium.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "IBMPlexSansHebrew-SemiBold": require("./assets/fonts/IBMPlexSansHebrew-SemiBold.ttf"),
    "Itim-Regular": require("./assets/fonts/Itim-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone14Pro"
              component={IPhone14Pro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro1"
              component={IPhone14Pro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro2"
              component={IPhone14Pro2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro3"
              component={IPhone14Pro3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro4"
              component={IPhone14Pro4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro5"
              component={IPhone14Pro5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro6"
              component={IPhone14Pro6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro7"
              component={IPhone14Pro7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro8"
              component={IPhone14Pro8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415Pro"
              component={IPhone1415Pro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415Pro1"
              component={IPhone1415Pro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415Pro2"
              component={IPhone1415Pro2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415Pro3"
              component={IPhone1415Pro3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
