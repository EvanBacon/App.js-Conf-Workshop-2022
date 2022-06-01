import { View, StyleSheet, Text } from "react-native";

export function Step1() {
  return (
    <View>
      <Text style={styles.text}>This is step 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "salmon",
    fontSize: 24,
    fontWeight: "bold",
  },
});
