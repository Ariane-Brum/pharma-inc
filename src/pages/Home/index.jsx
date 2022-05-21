import React from "react";
import { Routes, Route } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { Table } from "../../components/Table";
import * as S from "./styles";

export const Home = () => {
  return (
    <>
      <S.MainContainer>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          dolore magni quae minima fuga numquam hic ducimus, provident, mollitia
          quia nesciunt! Tempora sequi labore possimus sapiente!
        </p>
        <Table />
      </S.MainContainer>

      <Routes>
        <Route path="pacient/:id" element={<Modal />} />
      </Routes>
    </>
  );
};
