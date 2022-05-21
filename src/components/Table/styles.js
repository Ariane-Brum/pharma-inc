import styled from "styled-components";
import { keyframes } from "styled-components";

const slideLeft = keyframes`
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: 1rem;
    font: var(--font-l);
    align-self: flex-start;
    color: var(--brand-green-hover);
  }

  button {
    justify-self: center;
    width: 100%;
    max-width: 190px;
    margin-top: 1rem;
    border-radius: 5px;
    border: 0;
    background: var(--brand-green);
    color: var(--brand-green-light-02);
    padding: 0.5rem 2rem;
    font: var(--font-m);
    transition: background-color 0.3s;

    &:hover {
      background: var(--brand-green-hover);
    }
  }
`;

export const InputArea = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Select = styled.select`
  /* Reset */
  align-self: flex-start;
  appearance: none;
  border: 0;
  outline: 0;
  border-radius: 5px;
  margin: 2rem 0;
  font: var(--font-s);
  /* Personalize */
  width: 20rem;
  height: 3rem;
  padding: 0 4rem 0 1rem;
  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
      no-repeat right 0.8rem center / 1.4rem,
    linear-gradient(
      to left,
      var(--brand-green-hover) 3rem,
      var(--brand-green) 3rem
    );
  color: white;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  /* <option> colors */
  option {
    color: inherit;
    background-color: var(--brand-green);
  }
  /* Remove focus outline */
  &:focus {
    outline: none;
  }
  /* Remove IE arrow */
  &::-ms-expand {
    display: none;
  }

  @media (max-width: 500px) {
    font: var(--font-xs);
    margin: 1.5rem 0;
    width: 80%;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  animation: ${slideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--brand-green-hover);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--brand-green);
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0 0 0 /20%);
  }
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid red;
  background: var(--white);
  border-collapse: collapse;

  td {
    padding: 0.5rem;
    border: 1px solid var(--brand-green);
  }
`;

export const THead = styled.thead`
  background: var(--brand-green);
  height: 50px;
  color: var(--white);

  th {
    font: var(--font-s);
    font-weight: 700;
    border: 1px solid var(--brand-green-hover);

    @media (max-width: 500px) {
      font: var(--font-xs);
      font-weight: 700;
    }
  }
`;

export const TBody = styled.tbody`
  tr {
    text-align: center;
    font: var(--font-s);

    @media (max-width: 500px) {
      font: var(--font-xs);
    }
  }

  td {
    text-transform: capitalize;
  }
  a {
    padding: 0.3rem 1rem;
    border-radius: 5px;
    background: var(--white);
    border: 1px solid var(--brand-green);
    color: var(--brand-green);
    font: var(--font-s);
    font-weight: 700;
    transition: ease 0.3s;
    text-decoration: none;
    display: flex;
    width: fit-content;
    align-items: center;
    margin: 0 auto;
    gap: 6px;

    @media (max-width: 500px) {
      font: var(--font-xs);
      padding: 0.3rem 0.5rem;
      background: var(--brand-green);
      color: var(--brand-green-light-02);
      font-weight: 700;

      svg {
        display: none;
      }
    }

    &:hover {
      background: var(--brand-green);
      color: var(--white);
    }
  }
`;
