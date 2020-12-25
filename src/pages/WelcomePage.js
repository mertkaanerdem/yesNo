import React from 'react';
import {View, Text, Button} from 'react-native';

function WelcomeScreen({navigation, route}) {
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Text>User: {route.params.userText}</Text>
      <Button title="Game On" onPress={() => navigation.navigate('Game')} />
    </View>
  );
}

export {WelcomeScreen};
