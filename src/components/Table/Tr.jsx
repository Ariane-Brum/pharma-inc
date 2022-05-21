import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Eye } from "phosphor-react";

export const Tr = ({ user, openUserModal }) => {
  return (
    <tr>
      <td>{user.name.first}</td>

      <td>{user.gender}</td>
      <td>{new Date(user.dob.date).toLocaleDateString()}</td>
      <td>
        <Link
          to={`/pacient/${user.login.uuid}`}
          onClick={() => openUserModal(user)}
        >
          <Eye />
          View
        </Link>
      </td>
    </tr>
  );
};
