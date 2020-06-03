import React from 'react';
import Styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';

const Container = Styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledText = Styled.Text`
  font-size: 16px;
  color: blue;
  margin-bottom: 8px;
`;
const Button = Styled.TouchableOpacity``;

const Settings = ({ }: Props) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Button onPress={(): void => navigation.navigate('Details', { description: '1번' })}>
        <StyledText> Detail 1 </StyledText>
      </Button>
      <Button onPress={(): void => navigation.navigate('Details', { description: '2번' })}>
        <StyledText> Detail 2 </StyledText>
      </Button>
    </Container>
  );
};
export default Settings;
