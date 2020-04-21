import React from 'react';
import Styled from 'styled-components/native';

import Header from './Header';
import TodoList from './TodoList';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TodoListView = ({ }: Props) => {
    return(
        <Container>
            <Header />
            <TodoListView />
        </Container>
    ); 
};

export default TodoListView;
