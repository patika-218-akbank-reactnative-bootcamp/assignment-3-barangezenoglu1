import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    userName: null,
    userSurname: null,
    userTelephoneNumber: null,
  });
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
