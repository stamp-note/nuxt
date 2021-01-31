import styled, { css, keyframes } from "styled-components";

export const AuthFormWrap = styled.div`
  padding-top: var(--spacing);
`;

export const AuthFormInput = styled.input`
  position: relative;
  width: 100%;
  border-radius: var(--border-radius);
  background: #fff;
  padding: 10px;

  &::placeholder {
    color: var(--color-placeholder);
  }

  & + & {
    margin-top: 10px;
  }
  ${(props) =>
    props.button &&
    css`
      color: #fff;
      background-image: var(--btn-gradient);
    `}
`;

export const AuthToggle = styled.div`
  text-align: center;
  color: #777;
  padding: 10px 0 30px;

  span {
    border-bottom: 1px solid #555;
    cursor: pointer;
    padding: 0 5px;
  }
`;

const errorShake = keyframes`
  0% {
    transform: translate(30px);
    }
  20% { 
    transform: translate(-30px);
    }
  40% {
    transform: translate(15px);
    }
  60% {
    transform: translate(-15px);
    }
  80% {
    transform: translate(8px);
    }
  100% {
    transform: translate(0px);
    }
`;

export const ErrorDesc = styled.p`
  width: 100%;
  min-height: 25px;
  line-height: 1.2em;
  color: var(--color-point);
  text-align: center;
  padding-top: 10px;

  span {
    display: inline-block;
  }

  .shaking {
    animation: ${errorShake} 0.4s 1 linear;
  }
`;
