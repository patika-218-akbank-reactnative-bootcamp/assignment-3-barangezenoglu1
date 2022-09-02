import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import Logo from "../assets/telegram.png";
const windowWidth = Dimensions.get("window").width;

export const Contact = ({ contactName, lastSeen, profilePhoto, navigation}) => {
  const styles = StyleSheet.create({
    container: {
      width: windowWidth,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      borderBottomWidth: contactName ? 1 : 0,
      borderBottomColor: "#BFBFBF",
    },
    profilePhoto: {
      width: 70,
      height: 70,
      marginRight: 20,
      borderRadius: 50
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
    },
    contactName: {
      paddingBottom: 10,
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
    },
    lastSeen: {
      fontSize: 15,
      fontWeight: 15,
      color: "grey",
    },
  });
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("ChatDetail", {
      contactName,
        lastSeen,
        profilePhoto,
    })} >
      <Image style={styles.profilePhoto} source={{uri: profilePhoto}} />
      <View style={styles.textContainer}>
        <Text style={styles.contactName}>{contactName}</Text>
        <Text>{lastSeen}</Text>
      </View>
    </Pressable>
  );
};
