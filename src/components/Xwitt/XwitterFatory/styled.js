import styled from "styled-components";

export const XwitterFatoryForm = styled.form`
  display: block;
  border: 1px solid var(--color-main);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
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
  caret-color: var(--color-point);
  color: #fff;
  outline: none;
  overflow-y: scroll;
  margin-bottom: var(--spacing);

  &::placeholder {
    color: #777;
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

  svg
`;

export const AttachmentInput = styled.input`
  opacity: 0;
`;

export const XwitterSave = styled.input`
  display: inline-block;
  width: 50px;
  color: var(--color-background);
  text-align: center;
  border-radius: var(--border-radius);
  background: var(--color-point);
  padding: 5px 0;
`;
