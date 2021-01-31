import styled, { css } from "styled-components";
import { MainBtnDefault } from "style/GlobalStyles";

export const XwitterWrap = styled.div`
  position: relative;
  border-radius: var(--border-radius);
  background: #fff;
  overflow: hidden;

  & + & {
    margin-top: var(--spacing);
  }
`;

export const XwitterTopBar = styled.div`
  width: 100%;
  height: 26px;
  background: #ddd;
`;

export const XwitterEditWrap = styled.div`
  padding: var(--spacing);
`;

export const XwitterEditForm = styled.form``;

export const XwitterEditText = styled.textarea`
  width: 100%;
  height: 80px;
  background: #f0f0f0;
  padding: 10px;
`;

export const XwitterEditButtonWrap = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 10px;
`;

export const XwitterEditButton = styled.input`
  ${MainBtnDefault}
  width: 60px;
  cursor: pointer;

  ${(props) =>
    props.cancel &&
    css`
      background: #ccc;
    `}

  & + & {
    margin-left: 5px;
  }
`;

export const XwitterText = styled.p`
  line-height: 1.4em;
  padding: var(--spacing) 30px;
`;

export const XwitterIconWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 26px;
  padding: 5px 10px;
`;

export const XwitterButton = styled.button`
  height: 16px;
  font-size: 16px;
  color: #555;
  background: transparent;

  & + & {
    margin-left: 10px;
  }
`;

export const XwitterIcon = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 100px;
  background: ${(props) => (props.delete ? "#ED6A5E" : "#61C454")};
`;

export const XwitterImgWrap = styled.figure`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 70%;
  margin: 0 auto;
  margin-top: 10px;
`;

export const XwitterImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;
