import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

function LoginScreen(props) {
  const [text, setText] = useState('');

  function goTo() {
    props.navigation.navigate('Welcome', {
      userText: text,
    }); /* buradaki text, state'deki text*/
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.logo}>YES or NO</Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Give me your name"
            placeholderTextColor="#ffffff"
            onChangeText={(val) => setText(val)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          title="Go to Welcome Page"
          onPress={goTo}>
          <Text style={styles.buttontxt}>Go To Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    margin: 10,
    borderRadius: 10,
  },

  logo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#aa55ff',
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#aa55ff',
    marginVertical: 20,
    width: deviceSize.width * 0.9,
    color: '#ffffff',
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    borderColor: '#aa55ff',
    paddingVertical: 10,
  },
  buttontxt: {
    color: '#333',
  },
});

export {LoginScreen};
