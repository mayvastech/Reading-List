import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { colours } from "../constants/colours";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  const colourscheme = useColorScheme();
  // useColorScheme hook returns device colour scheme, either "light" or "dark" string
  const theme = colours[colourscheme] ?? colours.light;
  // theme references light or dark in colours object. if null use lightI
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen
        name="contact"
        options={{ title: "Contact", headerShown: false }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
