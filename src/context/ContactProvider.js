import React, { useState } from "react";
import { ContactContext } from "./ContactContext";
import { preparedContacts } from "../data/contactList";
export const ContactProvider = ({children}) => {
  const [contacts, setContacts] = useState(preparedContacts);
  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
