import styled from "styled-components";
import { MainBoxDefault } from "style/GlobalStyles";

export const AuthWrap = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthContainer = styled.div`
  width: 100%;
  max-width: 480px;
  ${MainBoxDefault}
  padding: var(--spacing-wrap);

  @media ${(props) => props.theme.mobileM} {
    padding: var(--spacing);
  }
`;

export const LogoWrap = styled.h1`
  font-size: 50px;
  color: var(--color-main);
  text-align: center;
`;
