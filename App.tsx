import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from './Screens/Splashscreen';
import Login from './Screens/Login';

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // Simulate a 3-second delay for demo purposes
  setTimeout(() => {
    setShowSplashScreen(false);
  }, 5000);

  return (
    <View style={{flex: 1}}>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <View style={{flex: 1}}>
          <Login />
        </View>
      )}
    </View>
  );
};

export default App;
