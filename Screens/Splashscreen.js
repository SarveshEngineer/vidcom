import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1621252792374-2b79e3fcf295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        }}
        style={styles.logo}
      />
      <Text style={styles.text}>Vidcom▶️</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'relative',
  },
  text: {
    fontSize: 58,
    marginTop: 10,
    color: 'white',
    position: 'absolute',
    bottom: 40,
  },
});

export default SplashScreen;
