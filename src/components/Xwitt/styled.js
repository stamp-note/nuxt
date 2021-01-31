import styled from "styled-components";

export const XwitterWrap = styled.div`
  border-radius: var(--border-radius);
  background: #fff;
  padding: 10px;

  & + & {
    margin-top: var(--spacing);
  }
`;

export const XwitterEditForm = styled.form`
  background: #ddd;
`;
