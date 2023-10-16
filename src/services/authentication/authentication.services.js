import React, { useState, createContext, useEffect, useContext } from "react";
import * as firebase from "firebase/app";
import {
  loginRequest,
  signUpRequest,
  logoutRequest,
} from "./authentication.context";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  const onRegister = (email, password, repeatPassword) => {
    setIsLoading(true);
    if (password !== repeatPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    signUpRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    logoutRequest().then(() => {
      setUser(null);
      setIsAuthenticated(false);
      setError(null);
    });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};