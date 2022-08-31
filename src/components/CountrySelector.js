import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, StyleSheet } from "react-native";
export const CountrySelector = ({
  selectedCountry,
  setSelectedCountry,
  countries,
}) => {
  return (
    <View style={styles.pickerContainer}>
      <View>
        <Text>Select Country</Text>
        <Picker
          mode={"dropdown"}
          style={styles.pickerCountry}
          selectedValue={selectedCountry}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCountry(itemValue)
          }
        >
          {countries.map((country) => {
            return (
              <Picker.Item
                key={country.code}
                label={country.name}
                value={country.code}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerCountry: {
    width: 350,
  },
});
