import React, { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Contact } from "./Contact";
export const ContactedList = ({navigation, contactedList}) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle} >
      {contactedList.map((contact) => {
       return <Contact
          key={contact.id}
          contactName={contact.contactName}
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
    paddingBottom: 80,
  }
})
