import React, {useContext} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {darkTheme} from '../data/theme';
export const CountrySelector = ({
  selectedCountry,
  setSelectedCountry,
  countries,
}) => {
  const {theme} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    pickerCountry: {
      width: 350,
      backgroundColor: theme === darkTheme ? theme.black : '',
    },
  });

  return (
    <View style={styles.pickerCountry}>
      <View>
        <Text>Select Country</Text>
        <Picker
          mode={'dropdown'}
          style={styles.pickerCountry}
          selectedValue={selectedCountry}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCountry(itemValue)
          }>
          {countries.map(country => {
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
