import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setuserData(employees);
  }, []);

  return (
    <Authcontext.Provider value={[userData,setuserData]}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
