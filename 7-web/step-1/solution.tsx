import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export function Step1() {
  return (
    <LinearGradient
      colors={["yellow", "blue"]}
      style={{ width: 100, height: 100 }}
    />
  );
}
