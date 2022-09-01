import React from "react";
import { Text, View, Dimensions, StyleSheet, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ContactList } from "../components/ContactList";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ContactsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons style={styles.backIcon} name="arrow-back" />
          </Pressable>
          <Text style={styles.title}>New Message</Text>
        </View>
        <View style={styles.rightContainer}>
          <Ionicons style={styles.searchIcon} name="search-outline" />
          <Ionicons style={styles.tabIcon} name="reorder-three" />
        </View>
      </View>
      <View>
     <ContactList navigation={navigation}/>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: windowHeight,
  },
  headerContainer: {
    width: windowWidth,
    backgroundColor: "#2AABEE",
    height: 60,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 5,
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  tabIcon: {
    fontSize: 40,
    marginRight: 15,
    color: "white",
  },
  searchIcon: {
    fontSize: 28,
    marginTop: 6,
    color: "white",
    marginRight: 15,
  },
  backIcon: {
    fontSize: 40,
    marginRight: 30,
    color: "white",
  },
});
