import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "./src/context/UserContext";
import { UserProvider } from "./src/context/UserProvider";
import { LoginScreen } from "./src/screens/LoginScreen";

export default function App() {
  return (
    <UserProvider>
      <View>
        <LoginScreen />
      </View>
    </UserProvider>
  );
}
