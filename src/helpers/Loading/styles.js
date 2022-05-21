import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: block;
  padding: 2rem 1rem;
  font-size: 1.2rem;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
