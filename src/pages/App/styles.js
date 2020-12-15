import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  padding: 0 400px;
  font: 16px "Roboto", sans-serif;
  @media (max-width: 1915px) {
    padding: 0 300px;
  }
  @media (max-width: 1432px) {
    padding: 0 200px;
  }
  @media (max-width: 1232px) {
    padding: 0 100px;
  }
  @media (max-width: 1032px) {
    padding: 0;
  }
`;

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-left: 2px solid rgb(231, 237, 241);
  border-right: 2px solid rgb(231, 237, 241);
  width:90%;
`;
