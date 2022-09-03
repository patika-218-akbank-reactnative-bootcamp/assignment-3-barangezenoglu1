import React from 'react';

export const MessagesContext = React.createContext({
  messages: null,
  setMessages: () => {},
});
