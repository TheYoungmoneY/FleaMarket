import React from 'react';
import Styled from 'styled-components/native';
import { ViewPropsAndroid } from 'react-native';

const Container = Styled.TouchableWithoutFeedback`
    position: absolute;
    top: 0;
    botton: 0;
    left: 0;
    right: 0;    
`;

const BlackBackground = Styled.View`
    background-color: #000;
    opacity: 0.3;
    width: 100%;
    height: 100%;
`;

interface Props {
    onPress: () => void;
}

const Background = ({onPress}: Props) => {
    return(
        <Container onPress={onPress}>
            <BlackBackground></BlackBackground>
        </Container>
    ); 
};

export default Background;