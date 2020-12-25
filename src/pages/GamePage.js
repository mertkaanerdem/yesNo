import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

function GameScreen({navigation}) {
  const [yesOrNo, setYesOrNo] = useState('');

  function yesNo() {
    let sayMe = Math.random();

    if (sayMe > 0.5) {
      setYesOrNo('Evet');
    } else {
      setYesOrNo('Hayır');
    }
  }

  return (
    <View>
      <View>
        <Text>{yesOrNo}</Text>
        <TouchableOpacity onPress={yesNo}>
          <Text>Yes or No</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Ana Sayfaya Dön</Text>
      </TouchableOpacity>
    </View>
  );
}

export {GameScreen};
