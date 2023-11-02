import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase.config";

export const fetchTodos = async () => {
  const todos = [];
  const snapShots = await getDocs(collection(db, "todos"));
  snapShots.forEach((doc) => {
    todos.push(doc.data());
  });
  return todos;
};
