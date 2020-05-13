import React from 'react';
import Styled from 'styled-components/native';

import TodoListView from './TodoListView';
import AddTodo from './AddTodo';
import DeleteAll from './DeleteAll';

const Container = Styled.View`
  flex: 1;
`;

interface Props {}

const Todo = ({  }: Props) => {
  return (
    <Container>
      <TodoListView />
      <DeleteAll />
      <AddTodo />
  </Container>
  );
};
export default Todo;
