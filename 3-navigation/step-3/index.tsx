import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen(
  // TODO: Destructure the property "navigation" out of the component props.
  // HINT: In case you aren't familiar with component props: https://reactjs.org/docs/components-and-props.html
) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{ fontSize: 16, textAlign: 'center' }}
        onPress={() => {
          // TODO: Navigate to the detail screen with `navigation.navigate('detail')`
          // You can pass properties to the new screen by providing them as the second argument to `navigate`.
        }}>Hello World 👋</Text>
    </View>
  )
}

// A basic secondary screen component
function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{ fontSize: 16, textAlign: 'center' }}
        onPress={() => {
          // TODO: Navigate back with the `goBack` function on `navigation`
        }}>Go Back 🔙</Text>
    </View>
  )
}

export function Step3() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#03c',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="home" component={HomeScreen} options={{ title: 'App.js Conf!' }} />
        {/* TODO: Add a new screen with name `detail` and component `DetailScreen` */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
