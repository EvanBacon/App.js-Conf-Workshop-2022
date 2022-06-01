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
          options={({ route }) => ({ title: getUser(route.params.id).name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
