import React from "react";
import {
    View,
    Dimensions,
    TextInput,
    StyleSheet,
  } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const ChatInput = ({onSubmitted, changeTextHandler, inputValue}) => {
    return (
        <View style={styles.inputAndImage}>
        <View style={styles.textInputContainer}>
          <View style={styles.inputContainer}>
            <Feather name="smile" style={styles.smileIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Type a message"
              placeholderTextColor="#000"
              onSubmitEditing={(event) => onSubmitted(event.nativeEvent.text)}
              onChangeText={(text) => changeTextHandler(text)}
              value={inputValue}
            />
          </View>
          <View style={styles.inputContainer}>
            <Entypo name="attachment" style={styles.attachIcon} />
            <Ionicons name="ios-mic-outline" style={styles.micIcon} />
          </View>
        </View>
        <View style={styles.imageWrapper}></View>
      </View>
    )
}

const styles = StyleSheet.create({
    inputAndImage: {
        display: "flex",
        flexDirection: "row",
        top: 0,
      },
      textInputContainer: {
        backgroundColor: "white",
        height: 50,
        width: windowWidth,
        marginBottom: 20,
        bottom: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      smileIcon: {
        fontSize: 20,
        marginLeft: 15,
      },
      textInput: {
        padding: 10,
        marginLeft: 10,
      },
      attachIcon: {
        fontSize: 20,
        marginRight: 15,
      },
      micIcon: {
        fontSize: 25,
        marginRight: 15,
      }
})