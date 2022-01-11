import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "1 - Learn React Native", key: "1" },
    { text: "2 - create an app", key: "2" },
    { text: "3 - play on the switch", key: "3" },
    { text: "4 - eat healthy", key: "4" },
    { text: "5 - sleep", key: "5" },
    { text: "6 - code", key: "6" },
    { text: "7 - sleep", key: "7" },
    { text: "8 - code", key: "8" },
    { text: "9 - sleep", key: "9" },
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  return (
    <View style={styles.container}>
      {/* Header section */}
      <Header />
      <View style={styles.content}>
        <AddItem submitHandler={submitHandler} />
        {/* To form */}
        <View style={styles.list}>
          {/* <ScrollView
          > */}
            <FlatList
            showsVerticalScrollIndicator={false}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          {/* </ScrollView> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
    backgroundColor: "#485460",
    height: "100%",
  },
});
