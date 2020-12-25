import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

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
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>{yesOrNo}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={yesNo}>
        <Text>Yes or No</Text>
      </TouchableOpacity>
      <View style={styles.backContainer}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonBack}>Return to Login Page</Text>
        </TouchableOpacity>
      </View>
    </View>
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

export {GameScreen};
