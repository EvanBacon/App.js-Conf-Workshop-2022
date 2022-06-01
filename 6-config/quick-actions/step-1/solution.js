import { useEffect } from "react";
import { Text, View } from "react-native";
import QuickActions from "react-native-quick-actions";

export default function App() {
  useEffect(() => {
    QuickActions.setShortcutItems([
      {
        title: "Play Song",
        subtitle: "NDA - Billie Eilish",
        icon: "Play",
        type: "alpha",
      },
      {
        title: "Shuffle",
        icon: "Shuffle",
        type: "beta",
      },
      {
        title: "Like Song",
        icon: "Love",
        type: "gamma",
      },
    ]);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Quick Actions</Text>
    </View>
  );
}
