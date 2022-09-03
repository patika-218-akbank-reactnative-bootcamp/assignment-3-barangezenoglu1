import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import ProfilePhoto from '../assets/86961373.png';
import {ThemeContext} from '../context/ThemeContext';
import {UserContext} from '../context/UserContext';
const windowHeight = Dimensions.get('window').height;
export const SettingsScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const {user, setUser} = useContext(UserContext);
  const [newUserName, setNewUserName] = useState(user.userName);
  const [newUserSurName, setNewUserSurName] = useState(user.userSurname);
  const isUserEmpty = obj => {
    return !Object.values(obj).every(element => element !== '');
  };
  useEffect(() => {
    setUser({...user, userName: newUserName, userSurname: newUserSurName});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newUserName, newUserSurName]);
  return (
    <View style={{...styles.container, backgroundColor: theme.white}}>
      <Text style={{...styles.title, color: theme.black}}>
        Profile Settings
      </Text>
      <View style={styles.profilePhotoContainer}>
        <Image source={ProfilePhoto} style={styles.profilePhoto} />
      </View>
      <Text style={{...styles.editTitle, color: theme.black}}>
        Edit Your Name and Surname
      </Text>
      <TextInput
        style={{...styles.userName, color: theme.black}}
        value={user.userName}
        onChangeText={text => setNewUserName(text)}
        placeholder={'Type your name'}
        placeholderTextColor={theme.black}
      />
      <TextInput
        style={styles.userSurname}
        placeholder={'Type your surname'}
        placeholderTextColor={theme.black}
        value={user.userSurname}
        onChangeText={text => setNewUserSurName(text)}
      />
      <TouchableOpacity style={styles.loginButtonContainer}>
        <Button
          title="Save"
          onPress={isUserEmpty(user) ? null : () => navigation.navigate('Home')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButtonContainer}>
        <Button
          title="Logout"
          color={'red'}
          onPress={() => {
            setUser({
              ...user,
              userName: '',
              userSurname: '',
              userTelephoneNumber: '',
            });
            navigation.navigate('Login');
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
    height: windowHeight,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  editTitle: {
    fontSize: 20,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  profilePhotoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    marginBottom: 15,
    borderRadius: 70,
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
  userSurname: {
    height: 40,
    width: '40%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 20,
  },
  loginButtonContainer: {
    width: 200,
    marginBottom: 20,
  },
});
