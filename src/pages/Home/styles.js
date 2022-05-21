import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 980px;
  margin: 0 auto;
  padding: 3rem 1rem;

  p {
    font: var(--font-m);
    margin-bottom: 2rem;
    color: var(--gray-paragraph);

    @media (max-width: 500px) {
      font: var(--font-s);
    }
  }
`;
