import styled from "styled-components";

export const Header = styled.header`
  background: var(--brand-green-hover);
  height: 60px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AreaLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--white);
  font: var(--font-l);
  font-weight: 400;
  text-decoration: none;

  span {
    color: var(--brand-green-light);
    font-weight: 700;
  }
`;
export const AreaUser = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--brand-green-light);
  display: flex;
  align-items: center;
  justify-content: center;
`;
