import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {login_page} from '../styles/style';

function LoginScreen(props) {
  const [text, setText] = useState('');

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!text.trim()) {
      alert('Please Enter Your Beatiful Name');
      return;
    } //Checked Successfully
    //Do whatever you want
    else {
      props.navigation.navigate('Welcome', {
        userText: text,
      }); /* buradaki text, state'deki text*/
    }
  };

  return (
    <SafeAreaView style={login_page.container}>
      <View>
        <Text style={login_page.logo}>YES or NO</Text>

        <View>
          <TextInput
            style={login_page.input}
            placeholder="Give me your name"
            placeholderTextColor="#ffffff"
            onChangeText={(val) => setText(val)}
          />
        </View>

        <TouchableOpacity
          style={login_page.button}
          title="Go to Welcome Page"
          onPress={checkTextInput}>
          <Text style={login_page.buttontxt}>Go To Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export {LoginScreen};
