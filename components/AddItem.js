import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddItem = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const writeTodosText = (e) => {
    setText(e);
  };
  return (
    <View style={styles.box}>
      <TextInput
        onChangeText={writeTodosText}
        style={styles.input}
        placeholder="Add Item"
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Item"
        color="#ef5777"
      />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  box: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ef5777",
  },
  input: {
    paddingHorizontal: 10,
    color: "#fff",
  },
});
