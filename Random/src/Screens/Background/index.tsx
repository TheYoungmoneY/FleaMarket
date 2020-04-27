import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableWithoutFeedback`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BombBackground = Styled.View`
  background-color: #c03;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;  
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const Label = Styled.Text`
    font-size: 120px;
    font-weight: bold;
    color: #fff;
`;

interface Props {
  onPress: () => void;
}

const Background = ({ onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <BombBackground>
          <Label>꽝이다!</Label>
      </BombBackground>
    </Container>
  );
};
export default Background;
