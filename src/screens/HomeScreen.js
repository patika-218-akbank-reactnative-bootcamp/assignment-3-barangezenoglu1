import { useIsFocused } from "@react-navigation/native";
import react, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ContactedList } from "../components/ContactedList";
import { ContactContext } from "../context/ContactContext";
import { MessagesContext } from "../context/MessagesContext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const HomeScreen = ({ navigation }) => {
  const { contacts } = useContext(ContactContext);
  const { messages } = useContext(MessagesContext);
  const isFocused = useIsFocused();
  console.log("rendered");
  const contactedPeople = contacts.filter((contact) => {
    return messages.some((message) => {
      return message.reciever === contact.contactName;
    });
  });
  console.log("contactedPeople", JSON.stringify(contactedPeople, undefined, 2));
  useEffect(() => {
    isFocused && console.log(messages);
  }, [isFocused]);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftContainer}>
            <Pressable onPress={() => console.log("baran baba")}>
              <Ionicons style={styles.tabIcon} name="reorder-three" />
            </Pressable>
            <Text style={styles.title}>Telegram</Text>
          </View>
          <Ionicons style={styles.searchIcon} name="search-outline" />
        </View>
        <View>
          <ContactedList navigation={navigation} contactedList={contactedPeople} />
        </View>
        <Pressable
          style={styles.contactsContainer}
          onPress={() => navigation.navigate("Contacts")}
        >
          <MaterialCommunityIcons name="pencil" style={styles.contactsIcon} />
        </Pressable>
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
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  tabIcon: {
    fontSize: 45,
    marginRight: 30,
    color: "white",
  },
  searchIcon: {
    fontSize: 30,
    color: "white",
    marginRight: 15,
  },
  contactsContainer: {
    position: "absolute",
    backgroundColor: "#2AABEE",
    height: 80,
    width: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
    right: 15,
  },
  contactsIcon: {
    fontSize: 30,
    color: "white",
  },
});
