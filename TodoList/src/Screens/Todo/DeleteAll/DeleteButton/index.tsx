import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
  position: absolute;
  bottom: 0;
  align-self: flex-end;
  justify-content: flex-end;
`;
const ButtonContainer = Styled.TouchableOpacity`
  box-shadow: 4px 4px 8px #999;
`;
const Icon = Styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
`;

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
