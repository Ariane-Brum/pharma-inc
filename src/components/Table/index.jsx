import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useUsers } from "../../hooks/useUsers";

import { Tr } from "./Tr";
import { SearchInputName } from "../SearchInputName";
import { SearchInputNat } from "../SearchInputNat";
import { Loading } from "../../helpers/Loading";

export const Table = () => {
  const {
    userList,
    loadingUser,
    fetchMoreUsers,
    page,
    setUserModal,
    handleUserList,
    loading,
  } = useUsers();

  const [selectGender, setSelectGender] = useState("");
  const [searchForName, setSearchForName] = useState("");
  const [searchForNationality, setSearchForNationality] = useState("");

  const openUserModal = (user) => {
    setUserModal(user);
  };

  useEffect(() => {
    handleUserList(selectGender);
  }, [selectGender]);
  return (
    <S.TableContainer>
      <S.InputArea>
        <SearchInputName
          searchForName={searchForName}
          setSearchForName={setSearchForName}
        />
        <SearchInputNat
          searchForNationality={searchForNationality}
          setSearchForNationality={setSearchForNationality}
        />
      </S.InputArea>

      <S.Select
        id="select"
        value={selectGender}
        onChange={({ target }) => setSelectGender(target.value)}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </S.Select>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <S.TableWrapper>
          <S.Table>
            <S.THead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Birth</th>
                <th>Actions</th>
              </tr>
            </S.THead>

            <S.TBody>
              {userList
                .filter((user) => {
                  if (searchForName === "") {
                    return user;
                  } else if (
                    user.name.first
                      .toLowerCase()
                      .includes(searchForName.toLowerCase())
                  ) {
                    return user;
                  }
                  return false;
                })
                .filter((user) => {
                  if (searchForNationality === "") {
                    return user;
                  } else if (
                    user.nat
                      .toLowerCase()
                      .includes(searchForNationality.toLowerCase())
                  ) {
                    return user;
                  }
                  return false;
                })
                .map((user) => (
                  <Tr
                    user={user}
                    key={user.login.uuid}
                    openUserModal={openUserModal}
                  />
                ))}
            </S.TBody>
          </S.Table>
        </S.TableWrapper>
      )}

      {loading ? null : loadingUser ? (
        <Loading />
      ) : (
        <button onClick={() => fetchMoreUsers(page, selectGender)}>
          Load More
        </button>
      )}
    </S.TableContainer>
  );
};
