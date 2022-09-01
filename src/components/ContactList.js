import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Contact } from "./Contact";
import { contacts } from "../data/contactList";
export const ContactList = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle} >
      {contacts.map((contact) => {
       return <Contact
          key={contact.id}
          userName={contact.userName}
          profilePhoto={contact.profilePhoto}
          lastSeen={contact.lastSeen}
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
