import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Welcome to galib ToDo Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingTop: 30,
    backgroundColor: "#ef5777",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
});
