import styled from "styled-components";

export const FormInput = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background: var(--white);
  flex: 1;
  border-radius: 5px;
  position: relative;

  input {
    flex: 1;
    border: 0;
    outline: none;
    padding: 1rem;
    font: var(--font-s);
    font-weight: 700;
    border-radius: 5px;
    border: 1px solid #ccc;
    color: var(--gray-headline);

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px var(--brand-green),
        0 0 0 1px var(--brand-green-hover);
      border-color: var(--brand-green-hover);
    }

    &::placeholder {
      color: #ccc;
    }

    @media (max-width: 500px) {
      font: var(--font-xs);
      font-weight: 700;
    }
  }

  svg {
    position: absolute;
    right: 10px;
    border: transparent;
    background: var(--white);
    outline: none;
  }
`;
