import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
  position: absolute;
  bottom: 0;
  align-self: flex-end;
  justify-content: flex-end;
`;
const ButtonContainer = Styled.TouchableOpacity`
  box-shadow: 8px 8px 16px #999;
`;
const Icon = Styled.Image``;

interface Props {
  onPress?: () => void;
}

const DeleteButton = ({ onPress }: Props) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <Icon source={require('~/Assets/Images/delete.png')} />
      </ButtonContainer>
    </Container>
  );
};
export default DeleteButton;
