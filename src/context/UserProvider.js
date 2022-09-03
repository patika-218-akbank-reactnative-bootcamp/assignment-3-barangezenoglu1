import React, {useState} from 'react';
import {UserContext} from './UserContext';

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    userName: '',
    userSurname: '',
    userTelephoneNumber: '',
  });
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};
