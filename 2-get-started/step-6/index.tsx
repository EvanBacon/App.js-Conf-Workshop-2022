import { useState } from "react";
// TODO: import Platform from react native
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
// TODO: import { useHover } from react-native-web-hooks

// TODO: Create a wrapper component "HoverView" that uses two hooks
// useRef and useHover, where ref is passed to useHover.

// TODO: Pass `ref` to the View element and forward all props to the View.
// Add a style that optionally changes opacity based on the `isHovered` property.


export function Step6() {
  const [selectedImage, setSelectedImage] = useState<{
    localUri: string;
    remoteUri?: string | null;
  }>();

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync()) && selectedImage) {
      // NOTE: since sharing is not available, we want to show the remoteUri in an alert so the user can copy/paste it.
      alert(
        `The image is available for sharing at: ${selectedImage.remoteUri}`
      );
      return;
    }

    if (selectedImage) {
      Sharing.shareAsync(selectedImage.localUri);
    }
  };

  if (selectedImage) {
    return (
      <View style={styles.container}>
        {/* TODO: Wrap this component with our new `HoverView` component */}
        <Image
          source={{ uri: selectedImage && selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* TODO: Wrap this component with our new `HoverView` component */}
      <Image
        source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
        style={styles.logo}
      />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
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
