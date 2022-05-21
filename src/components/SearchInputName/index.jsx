import * as S from "./styles";
import { UserList } from "phosphor-react";

export const SearchInputName = ({ searchForName, setSearchForName }) => {
  return (
    <S.FormInput>
      <input
        type="text"
        placeholder="Searching"
        value={searchForName}
        onChange={({ target }) => setSearchForName(target.value)}
      />

      <UserList size={24} height={38} color="#00453A" />
    </S.FormInput>
  );
};
