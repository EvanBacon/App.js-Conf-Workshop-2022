import { View, StyleSheet, Image } from "react-native";
import Logo from "./logo.png";

export function Step2() {
  return (
    <View>
      <Image source={Logo} />
      <Image
        source={{
          uri: "https://docs.expo.io/static/images/tutorial/logo.png",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 305,
    height: 159,
    marginTop: 16,
  },
});
