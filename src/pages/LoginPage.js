import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function LoginScreen(props) {
  const [text, setText] = useState('');

  function goTo() {
    props.navigation.navigate('Welcome', {
      userText: text,
    }); /* buradaki text, state'deki text*/
  }

  return (
    <SafeAreaView>
      <View>
        <Text>YES or NO</Text>

        <View>
          <TextInput
            placeholder="Give me your name"
            onChangeText={(val) => setText(val)}
          />
        </View>

        <TouchableOpacity title="Go to Welcome Page" onPress={goTo}>
          <Text>Go To Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export {LoginScreen};
