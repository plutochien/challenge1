import styled from 'styled-components';

export const NavList = styled.ul`
  margin-top: 0;
  list-style: none;
  padding-right: 100px;
  padding-left: 0;

  @media (max-width: 1032px) {
    padding: 0;
  }
`;

export const NavItem = styled.li`
  a:hover {
    background: rgb(224, 239, 250);
    border-radius: 25px;
    -webkit-transition: background-color 1s;
    transition: background-color 1s;
  }
  a {
    padding: 10px;
    font-weight: bold;
    line-height: 24px;
    font-size: 20px;
    display: flex;
    text-decoration: none;
    color: black;
    > span {
      line-height: 33px;
      @media (max-width: 732px) {
        display: none;
      }
      margin-left: 10px;
    }
  }
  .active {
    > span {
      color: rgb(23, 162, 242);
    }
    .injected-svg {
      fill: rgb(23, 162, 242);
    }
  }
`;
