import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

function WelcomeScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoşgeldin sevgili {route.params.userText}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game')}>
        <Text style={styles.buttontxt}>Game On</Text>
      </TouchableOpacity>
      <View style={styles.backContainer}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonBack}>Back</Text>
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
    width: 60,
  },
  buttonBack: {
    color: '#ddd',
    fontWeight: 'bold',
  },
});

export {WelcomeScreen};
