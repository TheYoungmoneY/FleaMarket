import React from 'react';
import Styled from 'styled-components/native';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Container = Styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Notifications = ({  }: Props) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Button
        onPress={(): void => navigation.goBack()} title="홈화면으로 돌아가기"
      >
        </Button>
    </Container>
  );
};
export default Notifications;
