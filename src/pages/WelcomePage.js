import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import {welcome_page} from '../styles/style';

function WelcomeScreen({navigation, route}) {
  return (
    <View style={welcome_page.container}>
      <Text style={welcome_page.text}>
        What a surprise to see you here, {route.params.userText}
      </Text>
      <TouchableOpacity
        style={welcome_page.button}
        onPress={() => navigation.navigate('Game')}>
        <Text style={welcome_page.buttontxt}>Game On</Text>
      </TouchableOpacity>
      <View style={welcome_page.backContainer}>
        <TouchableOpacity
          style={welcome_page.back}
          onPress={() => navigation.goBack()}>
          <Text style={welcome_page.buttonBack}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: '#aa55ff',
    marginVertical: 20,
  },
  button: {
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    borderColor: '#aa55ff',
    paddingVertical: 10,
    width: deviceSize.width * 0.9,
    marginBottom: 5,
  },
  buttontxt: {
    color: '#666',
    fontWeight: 'bold',
  },
  backContainer: {
    alignItems: 'flex-end',
    width: deviceSize.width * 0.9,
  },
  back: {
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#aa55ff',
    paddingVertical: 10,
    width: 200,
  },
  buttonBack: {
    color: '#ddd',
    fontWeight: 'bold',
  },
});

export {WelcomeScreen};
