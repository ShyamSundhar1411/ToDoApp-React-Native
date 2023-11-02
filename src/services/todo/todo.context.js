import React, { useContext, createContext, useEffect, useState } from "react";
import { fetchTodos } from "./todo.services";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);

  const todoGetRequest = () => {
    setIsLoading(true);
    fetchTodos()
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    todoGetRequest();
  }, []);
  return (
    <TodoContext.Provider
      value={{
        isLoading,
        error,
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
