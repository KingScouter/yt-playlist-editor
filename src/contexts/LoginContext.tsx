import React from 'react';
import { createContext, useState } from 'react';

export const LoginContext = createContext({});

type AppProps = {
  children?: React.ReactNode
}

export const LoginProvider = ({ children }: AppProps) => {
  const [ apiToken, setApiToken ] = useState('');
  const value = { apiToken, setApiToken };

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  )
}