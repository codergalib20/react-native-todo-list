import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Text style={styles.deleteIcon} onPress={() => pressHandler(item.key)}>
          +
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    color: "#fff",
    fontSize: 18,
  },
  deleteIcon: {
    transform: [{ rotate: "45deg" }],
    fontSize: 17,
    color: "#e83a3b",
    backgroundColor: "#fff",
    height: 20,
    width: 20,
    lineHeight: 20,
    textAlign: "center",
    borderRadius: 50,
  },
});
