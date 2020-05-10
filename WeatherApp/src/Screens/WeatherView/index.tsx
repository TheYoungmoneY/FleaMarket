import React, { useEffect, useState } from 'react';
import { FlatList, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: #EEE;
`;
const WeatherContainer = Styled(FlatList)``;
const LoadingView = Styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
`;
const Loading = Styled.ActivityIndicator`
    margin-bottom: 16px;
`;
const LoadingLabel = Styled.Text`
    font-size: 16px;
`;
const WeatherItemContainer = Styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
`;
const Weather = Styled.Text`
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
`;
const Temperature = Styled.Text`
    font-size: 16px;
`;

interface Props {}

const API_KEY = 'e1f8c7c7cf4e4b9b7cbcb71c1c52abf9';

interface IWeather {
    temperature ?: number;
    weather ?: string;
    isLoading : boolean;
}

const WeatherView = ({ }: Props) => {
    const [weatherInfo, setWeatherInfo] = useState<IWeather>({
        temperature: undefined,
        weather: undefined,
        isLoading: false,
    });
    const GetCurrentWeather = () => {
        setWeatherInfo({
            isLoading: false,
        });
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                fetch(
                    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
                )
                .then(response => response.json())
                .then(json => {
                    setWeatherInfo({
                        temperature : json.main.temp,
                        weather : json.weather[0].main,
                        isLoading: true,
                    });
                })
                .catch(error => {
                    setWeatherInfo({
                        isLoading: true,
                    });
                    showError('날씨 정보를 가져오는데 실패했습니다');
                });
            },
            error => {
                setWeatherInfo({
                    isLoading: true,
                });
                showError('위치 정보를 가져오는데 실패했습니다.');
            }
        );
    };
    const showError = ( message: string): void => {
        setTimeout(() => {
            Alert.alert(message);
        }, 500);
    };
    useEffect(() => {
        GetCurrentWeather();
    }, []);

    let data = [];
    const {isLoading, weather, temperature } = weatherInfo;
    if (weather && temperature) {
        data.push(weatherInfo);
    }
    return(
        <Container>
            <WeatherContainer
            onRefresh={() => GetCurrentWeather()}
            refreshing={!isLoading}
            data={data}
            keyExtractor={(item, index) => {
                return `Weather-${index}`;
            }}
            ListEmptyComponent={
                <LoadingView>
                    <Loading size="large" color="#1976D2" />
                    <LoadingLabel>로딩 중...</LoadingLabel>
                </LoadingView>
            }
            renderItem={({ item, index }) => (
                <WeatherItemContainer>
                    <Weather>{(item as IWeather).weather}</Weather>
                    <Temperature>{(item as IWeather).temperature}℃ </Temperature>
                </WeatherItemContainer>
            )}
            contentContainerStyle={{flex:1}}
            />
        </Container>
    );
};

export default WeatherView;