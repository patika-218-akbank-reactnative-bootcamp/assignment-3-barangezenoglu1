import React from "react";

export const ContactContext = React.createContext({
    contacts: null,
    setContacts: () => {},
})