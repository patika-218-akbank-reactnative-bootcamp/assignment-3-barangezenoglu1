import React, { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ContactContext } from "../context/ContactContext";
import { Contact } from "./Contact";
export const ContactList = ({navigation}) => {
  const {contacts, setContacts} = useContext(ContactContext);
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle} >
      {contacts.map((contact) => {
       return <Contact
          key={contact.id}
          contactName={contact.contactName}
          profilePhoto={contact.profilePhoto}
          lastSeen={contact.lastSeen}
          navigation={navigation}
          setContacts={setContacts}
        />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 80,
  }
})
