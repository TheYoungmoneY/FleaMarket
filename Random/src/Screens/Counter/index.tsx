
import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';
import Background from '~/Screens/Background';
import { ListView } from 'react-native';

const Container = Styled.SafeAreaView`
`;

const TitleContainer = Styled.View`
    justify-content: center;
    align-items: center;
`;

const TitleLabel = Styled.Text`
    marginTop: 100px;
    font-size: 48px;
    font-weight: bold;
`;

const CountContainer = Styled.View`
    marginTop: 20px;
    justify-content: center;
    align-items: center;
`;

const CountLabel = Styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    marginTop: 50px;
    margin: 25%;
    flex-grow: 1;
    height: 200px;
    width: 50%;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around
`;


interface Props {
    initValue: number;
  }

const Counter = ({ initValue }: Props) => {
  const [Bomb, setBomb] = useState<boolean>(false);
  function setBombhandler() {
      setBomb(true);
  };
  function getRandom(initValue){
    list = Array(initValue).fill(0);
    var index = Math.floor(Math.random() * Math.floor(list.length));
    list[index]=1;
    return list;
};
  const random = getRandom(initValue);

  return (
    <>
    <Container>
        <TitleContainer>
          <TitleLabel>🧨지뢰찾기💣</TitleLabel>
        </TitleContainer>
        <CountContainer>
          <CountLabel> 몇 개 중에 뽑을래요? {initValue} 개</CountLabel>
        </CountContainer>

      <ButtonContainer>
        {
          random.map((value, index)=>( 
            // <Button key={index} Random={value} onPress={() => {value===1 ?setBomb(true) : setBomb(false)}} />
            <Button key={index} Random={value} Bomb={Bomb} setBomb={setBombhandler} />
          ))
        }
      </ButtonContainer>
    </Container>
    {Bomb && <Background onPress={() => setBomb(false)}/>}
    </>
  );
};
export default Counter;