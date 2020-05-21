import React from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View``;
const Title = Styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
    padding: 0px 4px;
`
const CastContainer = Styled.View`
    padding: 0px 4px;    
`;
const CastImage = Styled.Image``;
const LabelName = Styled.Text`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 4px 2px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`;
interface Props {
    cast: Array<ICast>;
}

const CastList = ({cast}: Props) => {
    return(
        <Container>
            <Title>배우</Title>
            <FlatList
                horizontal={true}
                data={cast}
                keyExtractor={(item, index) => {
                    return `castList-${index}`;
                }}
                renderItem={({item, index}) => {
                    <CastContainer>ß
                        <CastImage 
                            source={{uri: (item as ICast).url_small_image }}
                            style={{ width: 100, height: 150}}
                        />
                    </CastContainer>
                }}
            />
        </Container>
    );
};

export default CastList;
