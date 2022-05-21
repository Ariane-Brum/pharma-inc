import styled from "styled-components";
import { keyframes } from "styled-components";

const scale = keyframes`
  0% {
    transform:scale(0) ;
    opacity: 1;
  }

  100% {
    transform:scale(1) ;
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 500px) {
    height: auto;
  }
`;

export const Modal = styled.section`
  width: 100%;
  max-width: 700px;
  background: var(--brand-green-light);
  animation: ${scale} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const HeaderModal = styled.header`
  height: 50px;
  display: flex;
  background: var(--brand-green);
  padding: 0.5rem;

  @media (max-width: 500px) {
    height: 90px;
  }

  img {
    margin-left: auto;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    position: relative;
    top: -55px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 30%);

    @media (max-width: 500px) {
      width: 91px;
      height: 91px;
      top: 0;
    }
  }

  a {
    width: 35px;
    height: 35px;
    margin-left: auto;
    padding: 0.5rem;
    color: var(--brand-green-light);
    border: 0;
    background: transparent;
    font-size: 1rem;
    font-weight: 700;

    &:hover {
      color: var(--brand-green-hover);
    }
  }
`;

export const UserInfo = styled.div`
  text-align: center;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 30%);
  background: var(--brand-green);
  padding: 1.5rem 0;

  @media (max-width: 500px) {
    padding: 1rem 0 0.6rem 0;
  }

  h2 {
    margin-bottom: 0.25rem;
    display: block;
    font: var(--font-l);
    color: var(--brand-beige);

    @media (max-width: 500px) {
      margin-bottom: 0;
      font: var(--font-m);
      font-weight: bold;
    }
  }
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 600px) {
    /* gap: 0; */
  }

  h3 {
    font: var(--font-l);
    font-weight: 400;
    color: var(--brand-green-hover);
    text-align: center;

    @media (max-width: 500px) {
      font: var(--font-m);
    }
  }

  ul {
    padding-top: 1rem;
    li {
      display: block;
      padding: 0.2rem 0;
      font: var(--font-s);
      color: var(--gray-paragraph);

      @media (max-width: 500px) {
        font: var(--font-xs);
        font-size: 0.813rem;

        &:last-child {
          word-wrap: break-word;
        }
      }

      span {
        color: var(--brand-green);
        font: var(--font-s);
        font-weight: bold;
        margin-right: 0.25rem;

        @media (max-width: 500px) {
          font: var(--font-xs);
          font-weight: bold;
        }
      }
    }

    @media (max-width: 500px) {
      padding-top: 0.5rem;
    }
  }
`;
