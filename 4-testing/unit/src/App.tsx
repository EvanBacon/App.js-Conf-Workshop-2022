import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            {Platform.OS === "ios" && <Text>I'm running on iOS!</Text>}
            {Platform.OS === "web" && <Text>I'm running on web!</Text>}
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
