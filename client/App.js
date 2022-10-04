import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';



const Stack =createNativeStackNavigator();
export default function App() {
  return (
    // wrapping for routing through diff pages
    <NavigationContainer>
      <Provider store={store}>
    <TailwindProvider>
    
    <Stack.Navigator>
    {/* all screens come in here */}

    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Restaurant" component={RestaurantScreen}/>

    </Stack.Navigator>
    </TailwindProvider>
    </Provider>
    </NavigationContainer>
  );
}


