import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

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

export {WelcomeScreen};
