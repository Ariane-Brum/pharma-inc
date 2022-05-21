import React from "react";
import * as S from "./styles";
import { Bandaids, User } from "phosphor-react";

export const Header = () => {
  return (
    <S.Header>
      <S.AreaLogo href="/">
        <Bandaids size={32} color="#FFFAF1" weight="fill" />
        Pharma <span>Inc</span>
      </S.AreaLogo>
      <S.AreaUser>
        <User size={24} color="#00453A" />
      </S.AreaUser>
    </S.Header>
  );
};
