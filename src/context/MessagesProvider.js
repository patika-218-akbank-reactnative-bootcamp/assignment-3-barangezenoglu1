import React, { useState } from "react";
import { MessagesContext } from "./MessagesContext";
export const MessagesProvider = ({children}) => {
  const [messages, setMesages] = useState([]);
  return (
    <MessagesContext.Provider
      value={{
        messages,
        setMesages,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
