import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details, getUser, List } from '../lib';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <List onPress={(id) => {
      navigation.push("detail", { id });
    }} />
  )
}

function DetailScreen({ route }) {
  return (
    <Details id={route.params.id} />
  )
}

export function Step5() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#03c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="home" component={HomeScreen} options={{ title: 'App.js Conf!' }} />
        <Stack.Screen
          name="detail"
          component={DetailScreen}
          {/* 
          TODO: Implement an `options` property which sets the title of the screen to the current user name
          HINT: Get the user name with `getUser(route.params.id).name`
         */}
          options={null}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
