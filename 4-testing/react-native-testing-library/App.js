import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

function App(props) {
  const { onCountIncreased } = props;
  const [count, setCount] = useState(0);
  const [inputCount, setInputCount] = useState(0);

  function handleAddOne() {
    setCount(count + 1);
    if (onCountIncreased) onCountIncreased(count + 1);
  }

  function handleAddMore() {
    if (isNaN(inputCount)) return;

    setCount(inputCount + count);
    if (onCountIncreased) onCountIncreased(inputCount + count);
  }

  return (
    <View style={styles.container}>
      <Text testID="counter" style={styles.count}>
        {count}
      </Text>
      <Button title="Add one" onPress={() => handleAddOne()} />
      <TextInput
        testID="text-input"
        onChangeText={(text) => setInputCount(Number(text))}
        style={styles.input}
      />
      <Button title="Add more" onPress={() => handleAddMore()} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#888",
    marginHorizontal: 16,
  },
  count: {
    fontSize: 20,
    marginBottom: 32,
    fontWeight: "bold",
  },
});
