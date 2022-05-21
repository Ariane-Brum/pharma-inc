import React from "react";
import * as S from "./styles";

export const PersonalContact = ({ user }) => {
  return (
    <S.ContactInfo>
      <h3>Contact Info</h3>
      <ul>
        <li>
          <span>Email:</span> {user.email}
        </li>
        <li>
          <span>Phone number:</span>
          {user.cell}
        </li>
        <li>
          <span>Address:</span>
          {`${user.location.street.name} ${user.location.street.number}`}
        </li>
      </ul>
    </S.ContactInfo>
  );
};
