import styled from "styled-components";

export const Nav = styled.nav`
  padding: var(--spacing-wrap) 0 var(--spacing);
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

export const Greetings = styled.h2`
  font-size: 50px;
  text-align: center;
  -webkit-text-stroke: 2px var(--color-main);
  padding: var(--spacing) 0 var(--spacing);
`;
