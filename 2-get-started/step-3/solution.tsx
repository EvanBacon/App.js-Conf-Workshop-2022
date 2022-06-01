import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export function Step3() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => alert("Button pressed!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
