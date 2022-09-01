import React, { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ContactContext } from "../context/ContactContext";
import { Contact } from "./Contact";
export const ContactList = ({navigation}) => {
  const {contacts} = useContext(ContactContext);
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle} >
      {contacts.map((contact) => {
       return <Contact
          key={contact.id}
          userName={contact.userName}
          profilePhoto={contact.profilePhoto}
          lastSeen={contact.lastSeen}
          messageList={contact.messageList}
          navigation={navigation}
        />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 80
  }
})
