import styled from "styled-components";
import { MainBtnDefault, MainBoxDefault } from "style/GlobalStyles";

export const ProfileWrap = styled.div`
  ${MainBoxDefault}

  padding: var(--spacing-wrap);

  @media ${(props) => props.theme.mobileM} {
    padding: var(--spacing-wrap) var(--spacing);
  }
`;

export const ProfileNickInput = styled.input`
  width: 100%;
  border-radius: var(--border-radius);
  background: #fff;
  padding: 10px;

  &::placeholder {
    color: var(--color-placeholder);
  }
`;

export const ProfileNickFin = styled.input`
  ${MainBtnDefault};

  width: 100%;
  margin-top: 10px;
`;

export const LogoutButton = styled.button`
  width: 100%;
  color: #fff;
  border-radius: var(--border-radius);
  background-image: var(--btn-gradient);
  padding: 10px;
  margin-top: var(--spacing-wrap);
`;
