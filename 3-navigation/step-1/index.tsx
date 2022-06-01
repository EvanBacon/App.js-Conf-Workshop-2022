import { View, Text } from "react-native"
// TODO: import NavigationContainer from "@react-navigation/native"
// TODO: import createNativeStackNavigator from "@react-navigation/native-stack"

// TODO: Create a stack navigator named "Stack" (hint: using `createNativeStackNavigator`)

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, textAlign: 'center' }}>Hello World 👋</Text>
    </View>
  )
}

export function Step1() {
  // TODO: Make this function return a `NavigationContainer`, with a `Stack.Navigator` element as its child
  // TODO: Add a `Stack.Screen` with component prop set to `HomeScreen` and name prop to `home`
  return null;
}
