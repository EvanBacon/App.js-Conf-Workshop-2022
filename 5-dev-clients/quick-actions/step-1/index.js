import { useEffect } from "react";
import { Text, View } from "react-native";

// Import the package first...

export default function App() {
  // `useEffect` with an empty array means this will run once when the component mounts.
  useEffect(() => {
    // Create some shortcut items.
    // Hint docs: https://github.com/jordanbyron/react-native-quick-actions
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Quick Actions</Text>
    </View>
  );
}
