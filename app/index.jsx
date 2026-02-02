import { StyleSheet, Text, View, Image } from "react-native";
import Logo from '../assets/books.jpg'
import { Link } from "expo-router";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Best</Text>

      <Text style={{ marginTop: 8, marginBottom: 25 }}>Reading List App</Text>
      <Image source={Logo} style={styles.image}/>
      <Link href="/about">About Page</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    marginVertical: 20,
  }
});
