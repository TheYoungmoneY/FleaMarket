import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';


const Containner = Styled.View`
    flex: 1;
    background-color : #EEE;
`;


const App = ({ }: Props) => {
  return (
    <Containner>
      <Counter initValue={15} />
    </Containner>
  );
};

export default App;
