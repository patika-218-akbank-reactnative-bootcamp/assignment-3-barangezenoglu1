import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import TelegramBackGround from "../assets/telegramBackGround.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import { ChatInput } from "../components/ChatInput";
import { TextBox } from "../components/TextBox";
import { MessagesContext } from "../context/MessagesContext";
import { UserContext } from "../context/UserContext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const ChatDetailScreen = ({ route, navigation }) => {
  const { messages, setMesages } = useContext(MessagesContext);
  const [updatedMessages, setUpdatedMessages] = useState(messages);
  const { user } = useContext(UserContext);
  const [inputText, setInputText] = useState("");
  const { contactName, profilePhoto, lastSeen } = route.params;
  const currentChat = updatedMessages.filter(
    (currentChat) => currentChat.reciever === contactName
  );
  const changeTextHandler = (text) => {
    setInputText(text);
  };
  const handleSubmitInput = (input) => {
    let sentMessages = updatedMessages;
    let msgObj = {
      id: Math.random(),
      sender: user.userName,
      reciever: contactName,
      message: input,
    };
    sentMessages.push(msgObj);
    setUpdatedMessages(sentMessages);
    setInputText("");
  }; 
  useEffect(() => {
    setMesages(updatedMessages);
  }, [updatedMessages]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileWrapper}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons style={styles.backIcon} name="arrow-back" />
          </Pressable>
          <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
          <View>
            <Text style={styles.profileName}>{contactName}</Text>
            <Text style={styles.lastSeen}>{lastSeen}</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Foundation name="telephone" style={styles.icon} />
          <Entypo name="dots-three-vertical" style={styles.icon} />
        </View>
      </View>

      <ImageBackground
        source={TelegramBackGround}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <ScrollView style={{ flex: 1 }}>
          {currentChat?.map((msgInfo) => {
            return <TextBox key={msgInfo?.id} message={msgInfo?.message} />;
          })}
        </ScrollView>
        <ChatInput
          onSubmitted={() => handleSubmitInput(inputText)}
          changeTextHandler={changeTextHandler}
          inputValue={inputText}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: windowWidth, height: windowHeight },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth,
    padding: 10,
    backgroundColor: "#2AABEE",
  },
  profilePhoto: {
    marginRight: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  profileWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    padding: 5,
    color: "#FFFF",
    fontSize: 20,
    fontWeight: "500",
  },
  lastSeen: {
    padding: 5,
    color: "#3B3B3B",
    fontSize: 15,
    fontWeight: "300",
  },
  backIcon: {
    fontSize: 40,
    marginRight: 30,
    color: "white",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    left: 20,
  },
  icon: {
    fontSize: 30,
    color: "white",
    marginRight: 25,
  },
  imageBackground: {
    height: 570,
    flex: 1,
  },
});
