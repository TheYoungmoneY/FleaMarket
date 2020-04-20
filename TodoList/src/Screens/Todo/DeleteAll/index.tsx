import React, { useContext } from 'react';

import { TodoListContext } from '~/Context/TodoListContext';
import DeleteButton from './DeleteButton';

interface Props {}

const DeleteAll = ({  }: Props) => {
    const { deleteTodoList } = useContext<ITodoListContext>(
        TodoListContext
    );
  return (
      <DeleteButton onPress={() => deleteTodoList()} />
  );
};
export default DeleteAll;
