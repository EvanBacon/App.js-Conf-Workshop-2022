import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export function Step2() {
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setInputText(text)}
        style={styles.input}
      />
      <Text>Result: {inputText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  input: {
    borderWidth: 1,
    padding: 8,
  },
});
