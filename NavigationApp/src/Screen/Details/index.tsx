import React from 'react';
import Styled from 'styled-components/native';
import { RouteProp } from '@react-navigation/native';

const Container = Styled.View`
  flex: 1;
  background-color: #e0e0e0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Text = Styled.Text`
  font-size: 55px;
`;

type RootStackParamList = {
  Details: {
      description: string
  };
};
type ScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
interface Props {
  route: ScreenRouteProp;
}
const Screen3 = ({ route }: Props) => {
  const {description} = route.params;
  return (
    <Container>
      <Text>{description}</Text>
    </Container>
  );
};
export default Screen3;
