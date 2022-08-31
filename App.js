import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, View } from "react-native";
import { UserProvider } from "./src/context/UserProvider";
import { LoginScreen } from "./src/screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { Contacts } from "./src/screens/Contacts";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#2AABEE'} />
      <UserProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Contacts" component={Contacts} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}
