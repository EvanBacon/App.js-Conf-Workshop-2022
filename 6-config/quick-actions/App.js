import { StyleSheet, View } from "react-native";
import { Step1 } from "./step-1";
// import { Step2 } from "./step-2";

export default function App() {
  return (
    <View style={styles.container}>
      <Step1 />
      {/* <Step2 /> */}
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
