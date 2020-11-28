import React, { Fragment } from 'react';

import AddTask from '../AddTask/AddTask';
import Filters from '../Filters/Filters';
import TodoList from '../TodoList/TodoList';
import { Container, Footer, Header, Layout, Main, Text } from './styles';

const App = () => (
  <Fragment>
    <Layout>
      <Container>
        <Header>
          <Text>{new Date().toJSON().slice(0, 10)}</Text>
          <Filters />
        </Header>
        <Main>
          <TodoList />
        </Main>
        <Footer>
          <AddTask />
        </Footer>
      </Container>
    </Layout>
  </Fragment>
);

export default App;
