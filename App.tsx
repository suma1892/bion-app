import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';

const Main = () => {
  return <Navigation />;
};

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Main />
    </SafeAreaView>
  );
};

export default App;
