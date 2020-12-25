import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const login_page = StyleSheet.create({
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
    marginVertical: 5,
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
    color: '#666',
    fontWeight: 'bold',
  },
});

const welcome_page = StyleSheet.create({
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

const game_page = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    margin: 10,
    borderRadius: 10,
  },

  answer: {
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

export {login_page, welcome_page, game_page};
