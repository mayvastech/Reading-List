import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { colours } from "../constants/colours";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  const colourscheme = useColorScheme();
  // useColorScheme hook returns device colour scheme, either "light" or "dark" string
  console.log(colourscheme);
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ddd" },
        headerTintColor: "#333",
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
