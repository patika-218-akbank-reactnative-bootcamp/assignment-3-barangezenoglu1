import { NavigationContainer} from "@react-navigation/native";
import React from "react";
import { StatusBar} from "react-native";
import { UserProvider } from "./src/context/UserProvider";
import { LoginScreen } from "./src/screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ContactsScreen } from "./src/screens/ContactsScreen";
import { ChatDetailScreen } from "./src/screens/ChatDetailScreen";
import { ContactProvider } from "./src/context/ContactProvider";
import { MessagesProvider } from "./src/context/MessagesProvider";
import { SettingsScreen } from "./src/screens/SettingsScreen";
import { ThemeProvider } from "./src/context/ThemeProvider";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#2AABEE"} />
      <UserProvider>
        <ContactProvider>
          <MessagesProvider>
            <ThemeProvider>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Contacts" component={ContactsScreen} />
                <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
              </Stack.Navigator>
            </ThemeProvider>
          </MessagesProvider>
        </ContactProvider>
      </UserProvider>
    </NavigationContainer>
  );
}
