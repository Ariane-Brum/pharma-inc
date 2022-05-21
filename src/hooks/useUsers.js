import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUsers = () => {
  const value = useContext(UserContext);
  return value;
};
