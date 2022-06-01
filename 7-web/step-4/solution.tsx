import React, { useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useHover } from "react-native-web-hooks";

export function Step4() {
  const ref = useRef(null);
  const isHovered = useHover(ref);
  return (
    <View>
      <Text ref={ref} style={[styles.text, isHovered && styles.hoveredText]}>
        Write once, native everywhere.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
  },
  hoveredText: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "salmon",
  },
});
