import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, textAlign: 'center' }}>Hello World 👋</Text>
    </View>
  )
}

export function Step2() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        // TODO: Add a headerStyle prop which changes the background color to the App.js conf theme color ('#03c')
        // TODO: Add a headerTintColor prop which sets the title color to white
        // TODO: Add a headerTitleStyle prop which sets the title `fontWeight` to 'bold'
      }}>
        {/* 
        TODO: Add a prop `options` which is set to an object with key "title" set to something like "App.js Conf!" 
        HINT: Object props have two sets of curly braces, like `foo={{}}`
        */}
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
