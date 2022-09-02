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
    position: 'relative',
    width: 250,
    backgroundColor: "#BFF0AD",
    padding: 15,
    margin: 10,
    borderRadius: 20,
    top: 5,
    left: '32%'
  },
});