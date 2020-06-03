import React , { ReactElement } from 'react';
import Styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';

const Container = Styled.View`
  flex: 1;
  background-color: #e0e0e0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledText = Styled.Text`
  font-Size: 44px;
  font-Weight: bold;
`;

interface Props {}

const HomeScreen = ({  }: Props) => {
  const navigation = useNavigation();
  return (
    <Container>
        <StyledText > 나눔마켓 홈화면 </StyledText>
    </Container>
  );
};
export default HomeScreen;

