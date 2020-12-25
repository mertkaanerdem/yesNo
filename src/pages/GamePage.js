import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {game_page} from '../styles/style';

function GameScreen({navigation}) {
  const [yesOrNo, setYesOrNo] = useState('');

  function yesNo() {
    let sayMe = Math.random();

    if (sayMe > 0.5) {
      setYesOrNo('Yes');
    } else {
      setYesOrNo('No');
    }
  }

  return (
    <View style={game_page.container}>
      <View>
        <Text style={game_page.logo}>{yesOrNo}</Text>
      </View>
      <TouchableOpacity style={game_page.button} onPress={yesNo}>
        <Text style={game_page.buttontxt}>What Do You Thing?</Text>
      </TouchableOpacity>
      <View style={game_page.backContainer}>
        <TouchableOpacity
          style={game_page.back}
          onPress={() => navigation.navigate('Login')}>
          <Text style={game_page.buttonBack}>Return to Login Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export {GameScreen};
