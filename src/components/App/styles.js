import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  height: calc(100vh - 100px);
  width: calc(100vw - 100px);
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background: white;
`;

export const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  max-width: 1000px;
  background: #d1ecf1;
  border-radius: 25px;
`;

export const Header = styled.header`
  display: flex;
  padding: 16px 16px 16px 16px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03); ;
`;
export const Main = styled.div`
  min-height: 400px;
  overflow: auto;
`;

export const Footer = styled.footer`
  display: flex;
  margin-top: auto;
  padding: 10px 15px;
  text-align: center;
`;

export const Text = styled.span`
  flex: 1 1;
  color: #0c5460;
  text-align: justify;
  word-break: break-all;
  font-size: 20px;
  font-weight: 300;
  word-break: normal;
`;
