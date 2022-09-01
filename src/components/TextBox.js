import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const TextBox = ({ message }) => {
  return (
    <View style={styles.textBox}>
      <Text textBreakStrategy="simple">{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    width: 250,
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    top: 5,
  },
});