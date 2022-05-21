import React from "react";
import * as S from "./styles";

export const PersonalInfo = ({ user }) => {
  return (
    <S.PersonalInfo>
      <h3>Personal Info</h3>
      <ul>
        <li>
          <span>Nationality:</span> {user.nat}
        </li>
        <li>
          <span>Birth Date:</span>{" "}
          {new Date(user.dob.date).toLocaleDateString()}
        </li>
        <li>
          <span>Gender:</span> {user.gender}
        </li>
        <li>
          <span>ID:</span> ID: {user.login.uuid}
        </li>
        <li>
          <span>URL: </span> {document.documentURI}
        </li>
      </ul>
    </S.PersonalInfo>
  );
};
