import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [message, setMessage] = useState("");
  return (
    <View style={styles.container}>
      <Text testID="welcome">Welcome!</Text>
      <Button
        onPress={() => setMessage("Hello!!!")}
        title="Say hello"
        testID="hello_button"
      />
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
