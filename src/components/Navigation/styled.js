import styled from "styled-components";

export const Nav = styled.nav`
  padding: var(--spacing) 0;
`;

export const NavWrap = styled.ul`
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  text-align: center;
  a {
    color: #fff;
  }

  & + & {
    margin-left: var(--spacing-wrap);
  }
`;

export const NavIcon = styled.div`
  font-size: 30px;
  color: var(--color-main);
`;

export const NavTitle = styled.div`
  margin-top: 5px;
`;
