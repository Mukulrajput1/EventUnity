'use client'
import React, { createContext, useContext, useState } from 'react';

const contexter = createContext<any>({});

export function ProvideContext({ children }: any) {
  const [state, setState] = useState('a');
  const [isLogin,setIsLogin] = useState(false)

  return (
    <contexter.Provider value={{ state, setState,isLogin,setIsLogin }}>
      {children}
    </contexter.Provider>
  );
}

// Define the custom hook to consume the context
export const useContexter = () => {
  return useContext(contexter);
};
