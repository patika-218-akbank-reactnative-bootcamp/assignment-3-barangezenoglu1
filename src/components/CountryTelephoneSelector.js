import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, Text, View} from 'react-native';

export const ContryTelephoneSelector = ({
  selectedNumber,
  setSelectedNumber,
  countries,
}) => {
  return (
    <View style={styles.pickerContainer}>
      <View style={styles.pickerNumber}>
        <Text>Select Your number</Text>
        <Picker
          mode={'dropdown'}
          style={styles.pickerNumber}
          selectedValue={selectedNumber}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedNumber(itemValue)
          }>
          {countries.map(country => {
            return (
              <Picker.Item
                key={country.dial_code}
                label={country.dial_code}
                value={country.dial_code}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerNumber: {
    width: 150,
  },
});
