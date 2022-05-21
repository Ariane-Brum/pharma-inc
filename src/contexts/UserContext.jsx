import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const PAGES = 50;
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(PAGES);
  const [userModal, setUserModal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(false);

  const handleUserList = async (selectGender) => {
    try {
      const res = await api.get(`/?gender=${selectGender}`, {
        params: {
          results: PAGES,
        },
      });

      const response = res.data.results;
      setUserList(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreUsers = async (page, selectGender) => {
    setLoadingUser(true);
    const res = await api.get(`/?gender=${selectGender}`, {
      params: {
        results: PAGES,
        page,
      },
    });
    console.log(res);
    const response = res.data.results;
    setUserList((user) => [...user, ...response]);
    setPage((page) => page + PAGES);
    setLoadingUser(false);
  };

  return (
    <UserContext.Provider
      value={{
        userList,
        loading,
        loadingUser,
        fetchMoreUsers,
        page,
        userModal,
        setUserModal,
        handleUserList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
