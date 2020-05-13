import React, {useState} from 'react';
import Styled from 'styled-components/native';
import { ListView } from 'react-native';

const Container = Styled.TouchableOpacity``;
const Label = Styled.Text`
  font-size: 50px;
  font-weight: bold;
`;

// interface Props {
//     Random: number;
//     onPress?: () => void;
// }

// const Button = ({ Random, onPress}: Props) => {
//   const [Pressed, setPressed] = useState<string>("💛");
//   return (
//     // <Container onPress={() => {Random===1 ? setPressed("💔") : setPressed("🖤")}}>
//     <Container onPress={onPress}>
//         <Label>{Pressed}</Label>
//     </Container>
//   );
// };

// export default Button;

interface Props {
  Random: number;
  Bomb: boolean;
  setBomb: () => void;
}

const Button = ({ Random, Bomb, setBomb}: Props) => {
    const [Pressed, setPressed] = useState<string>("💛");
    function onPress() {
      setPressed("💔");
      setBomb();
    };
    return (
      <Container onPress={() => {Random===1 ? onPress() : setPressed("🖤")}}>
        <Label>{Pressed}</Label>
      </Container>
      );
    }
export default Button;
