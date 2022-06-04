import { StyleSheet, View } from "react-native";
import { Step1 } from "./step-1";
// import { Step2 } from "./step-2";
// import { Step3 } from "./step-3";
// import { Step4 } from "./step-4";
// import { Step5 } from "./step-5";
// import { Step6 } from "./step-6";
// import { Step7 } from "./step-7";

export default function App() {
  return (
    <View style={styles.container}>
      <Step1 />
      {/* <Step2 /> */}
      {/* <Step3 /> */}
      {/* <Step4 /> */}
      {/* <Step5 /> */}
      {/* <Step6 /> */}
      {/* <Step7 /> */}
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
