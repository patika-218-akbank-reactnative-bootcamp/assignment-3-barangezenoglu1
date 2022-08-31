import React from "react";
import { Text } from "react-native";

export const ChatDetail = ({route, navigation}) => {
    const {userName, profilePhoto, lastSeen} = route.params
    console.log('userName', userName)
    return (
        <Text>{userName}</Text>
    )
}