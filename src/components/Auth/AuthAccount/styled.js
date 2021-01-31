import styled from "styled-components";

export const AuthAccountWrap = styled.div`
  display: flex;
  border-radius: var(--border-radius);
  background: #ddd;

  @media ${(props) => props.theme.mobileM} {
    display: block;
  }
`;

export const LogoIcon = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-right: 5px;
`;

export const GoggleGitButton = styled.button`
  position: relative;
  width: 50%;
  background: transparent;
  padding: 10px;

  & + & {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 20px;
      background: #999;
      transform: translateY(-50%);
    }
  }

  @media ${(props) => props.theme.mobileM} {
    width: 100%;

    & + & {
      &::before {
        top: 0;
        left: 0;
        right: 0;
        width: 94%;
        height: 1px;
        margin: 0 auto;
      }
    }
  }
`;
