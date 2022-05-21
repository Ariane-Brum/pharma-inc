import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import { PersonalInfo } from "../PersonalInfo";
import * as S from "./styles";
import { X } from "phosphor-react";
import { PersonalContact } from "../PersonalContact";

export const Modal = () => {
  const { setUserModal, userList } = useUsers();
  const { id } = useParams();
  const navigate = useNavigate();

  const [user] = userList.filter((user) => {
    return user.login.uuid === id && user;
  });

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      setUserModal(null);
      navigate("/");
    }
  };

  return (
    <>
      {user ? (
        <S.ModalContainer onClick={closeModal}>
          <S.Modal aria-label="Conteúdo do Modal">
            <S.HeaderModal>
              <img src={user.picture.large} alt="" />
              <Link to="/" aria-label="Fechar Modal" onClick={closeModal}>
                <X size={24} />
              </Link>
            </S.HeaderModal>
            <S.UserInfo>
              <h2>{`${user.name.first} ${user.name.last}`}</h2>
            </S.UserInfo>
            <S.ContentModal>
              <PersonalInfo user={user} />
              <PersonalContact user={user} />
            </S.ContentModal>
          </S.Modal>
        </S.ModalContainer>
      ) : null}
    </>
  );
};
