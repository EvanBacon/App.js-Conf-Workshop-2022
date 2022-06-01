import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// TODO: import { useState } from "react";
// TODO: import * as ImagePicker from "expo-image-picker";

export function Step4() {
  // TODO: Create state that will allow storage of an object that looks like: { localUri: string }

  // TODO: Create a function that will open the image picker asynchronously when the button is pressed.
  // This image picker should:
  //  - Get a permission result from ImagePicker.requestMediaLibraryPermissionsAsync
  //  - If that permissionResult.granted === false, then stop.
  //  - Pull up the image picker with ImagePicker.launchImageLibraryAsync()
  //  - If the result from the image picker is cancelled, then stop.
  //  - If there's a result, save it in local state.

  // TODO: If there's a selected image, display it instead of the rest of the UI with an Image component.

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
        style={styles.logo}
      />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity
        onPress={() => alert("button pressed!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 32,
  },
  instructions: {
    marginHorizontal: 32,
    marginBottom: 32,
  },
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
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
