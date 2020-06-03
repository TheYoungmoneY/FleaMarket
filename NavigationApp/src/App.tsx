import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from '~/Screen/Navigator';
interface Props {}

const App = ({  }: Props) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </>
  );
};
export default App;
