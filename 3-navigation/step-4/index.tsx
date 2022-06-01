import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Disregard the code in "lib", it's just here to spice up the demo
// the code used in "lib" is just a collection of Text, Image, Views with nice styles.
import { Details, List } from '../lib';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <List onPress={(id) => {
      // TODO: Navigate to the "detail" screen with the parameter `id`.
    }} />
  )
}

function DetailScreen({ route }) {
  // TODO: Pass the ID to the screen via the `route.params`
  // HINT: https://reactnavigation.org/docs/params
  return (
    <Details id={null} />
  )
}

export function Step4() {
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
        <Stack.Screen name="detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
