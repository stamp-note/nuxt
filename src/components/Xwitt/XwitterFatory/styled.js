import styled from "styled-components";
import { MainBtnDefault, MainBoxDefault } from "style/GlobalStyles";

export const XwitterFatoryForm = styled.form`
  ${MainBoxDefault}

  display: block;
  padding: var(--spacing);
  padding-bottom: 15px;
`;

export const XwitterTextInputWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: var(--spacing);
  margin-bottom: 10px;
`;

export const XwitterTextInput = styled.textarea`
  display: block;
  width: 100%;
  height: 80px;
  line-height: 1.4em;
  caret-color: var(--color-point);
  color: #fff;
  outline: none;
  overflow-y: scroll;
  padding-right: 5px;
  margin-bottom: var(--spacing);

  &::placeholder {
    color: #777;
  }

  @media ${(props) => props.theme.mobileS} {
    height: 140px;
  }
`;

export const CountText = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  color: #999;
`;

export const AttachmentPreview = styled.div`
  position: relative;
  width: 100px;

  img {
    display: block;
    width: 100%;
  }
`;

export const AttachmentPreviewClear = styled.button`
  display: inline-block;
  position: absolute;
  top: -10px;
  right: -7px;
  z-index: 2;
  width: 18px;
  height: 18px;
  font-size: 18px;
  text-align: right;
  background: transparent;
  color: var(--color-point);
`;

export const FormBottomWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const AttachmentLabel = styled.label`
  display: inline-block;
  height: 26px;
  font-size: 26px;
  color: var(--color-point);
  cursor: pointer;
`;

export const AttachmentInput = styled.input`
  opacity: 0;
`;

export const XwitterSave = styled.input`
  ${MainBtnDefault}
`;
