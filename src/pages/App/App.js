import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Layout } from './styles';
import Navigation from '../../components/Navigation/Navigation';
import Routes from '../../routes';

const App = () => (
  <Layout>
    <BrowserRouter>
      <Navigation />
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  </Layout>
);

export default App;
