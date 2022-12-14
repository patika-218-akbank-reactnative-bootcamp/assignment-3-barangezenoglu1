import React, {useContext, useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {UserContext} from '../context/UserContext';
import {ThemeContext} from '../context/ThemeContext';
import TelegramLogo from '../assets/telegram.png';
import {CountrySelector} from '../components/CountrySelector';
import {ContryTelephoneSelector} from '../components/CountryTelephoneSelector';
import {countries} from '../data/countries';
import {useIsFocused} from '@react-navigation/native';
import {darkTheme} from '../data/theme';

const windowHeight = Dimensions.get('window').height;
export const LoginScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
  const [selectedNumber, setSelectedNumber] = useState();
  const {user, setUser} = useContext(UserContext);
  const isFocused = useIsFocused();
  const isUserEmpty = obj => {
    if (obj === null) {
      return true;
    } else {
      return !Object.values(obj).every(element => element !== '');
    }
  };
  useEffect(() => {
    const autoSelectedNumber = countries.find(
      country => country?.code === selectedCountry,
    )?.dial_code;
    setSelectedNumber(autoSelectedNumber);
  }, [selectedCountry]);
  useEffect(() => {
    isFocused;
  }, [isFocused]);
  return (
    <View style={{...styles.container, backgroundColor: theme.white}}>
      <View style={styles.titleLogoContainer}>
        <Image style={styles.logo} source={TelegramLogo} />
        <Text style={styles.title}>Telegram</Text>
        <Text style={styles.description} numberOfLines={2}>
          Please confirm your country code and enter your phone number
        </Text>
        <View style={{...styles.pickerContainer, backgroundColor: theme.white}}>
          <CountrySelector
            countries={countries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...styles.numberContainer,
              backgroundColor: theme === darkTheme ? theme.black : '',
            }}>
            <ContryTelephoneSelector
              countries={countries}
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
            <TextInput
              style={styles.number}
              placeholder={'Type your number'}
              placeholderTextColor={theme.white}
              value={user.userTelephoneNumber}
              onChangeText={text =>
                setUser({...user, userTelephoneNumber: text})
              }
            />
          </View>
        </View>
        <View style={styles.nameContainer}>
          <TextInput
            style={styles.userName}
            value={user.userName}
            onChangeText={text => setUser({...user, userName: text})}
            placeholder={'Type your name'}
            placeholderTextColor={theme.black}
          />
          <TextInput
            style={styles.contactName}
            placeholder={'Type your surname'}
            placeholderTextColor={theme.black}
            value={user.userSurname}
            onChangeText={text => setUser({...user, userSurname: text})}
          />
        </View>
        <TouchableOpacity style={styles.loginButtonContainer}>
          <Button
            title="Login"
            onPress={
              isUserEmpty(user) ? null : () => navigation.navigate('Home')
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    height: windowHeight,
  },
  titleLogoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 125,
    marginBottom: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: '#6A6868',
    textAlign: 'center',
  },
  pickerContainer: {
    marginTop: 20,
  },
  numberContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width: 200,
    height: '50%',
    marginTop: 15,
  },
  loginButtonContainer: {
    width: 200,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 400,
    marginBottom: 30,
  },
  userName: {
    height: 40,
    width: '40%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    paddingLeft: 10,
  },
});
