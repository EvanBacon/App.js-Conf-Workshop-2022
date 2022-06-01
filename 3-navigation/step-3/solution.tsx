import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, textAlign: 'center' }} onPress={() => {
        navigation.navigate('detail')
      }}>Hello World 👋</Text>
    </View>
  )
}

function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{ fontSize: 16, textAlign: 'center' }}
        onPress={() => {
          navigation.goBack();
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
        <Stack.Screen name="detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
