import styled from "styled-components";

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
  border: 1px solid var(--color-main);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: var(--spacing-wrap);
`;

export const LogoWrap = styled.h1`
  font-size: 50px;
  color: var(--color-main);
  text-align: center;
  margin-bottom: var(--spacing);
`;
