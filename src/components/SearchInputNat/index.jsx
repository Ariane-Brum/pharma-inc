import * as S from "./styles";
import { Globe } from "phosphor-react";

export const SearchInputNat = ({
  searchForNationality,
  setSearchForNationality,
}) => {
  return (
    <S.FormInput>
      <input
        type="text"
        placeholder="Searching by Nationality"
        value={searchForNationality}
        onChange={({ target }) => setSearchForNationality(target.value)}
      />

      <Globe size={24} height={38} color="#00453A" />
    </S.FormInput>
  );
};
