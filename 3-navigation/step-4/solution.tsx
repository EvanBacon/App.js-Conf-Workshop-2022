import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details, List } from '../lib';

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
