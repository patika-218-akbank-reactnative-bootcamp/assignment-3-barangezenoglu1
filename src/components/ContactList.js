import React from "react";
import { ScrollView } from "react-native";
import { Contact } from "./Contact";
import { contacts } from "../data/contactList";
export const ContactList = ({navigation}) => {
  return (
    <ScrollView>
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
