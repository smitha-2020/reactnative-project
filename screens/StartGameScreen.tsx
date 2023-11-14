import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import {CustomButton} from '../components/CustomButton';

const StartGameScreen = () => {
  const [enteredNumb, setEnteredNumb]: [string, Function] = useState('');

  const onResetPress = () => {
    setEnteredNumb('');
  };

  const confirmMessage = () =>
    Alert.alert('Error!', 'Number should be between 0 and 99', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const onConfirmPress = () => {
    const parsedNumb = parseInt(enteredNumb);
    if (!isNaN(parsedNumb) || parsedNumb < 0 || parsedNumb < 99) {
    }
  };
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.buttonViewStyle}
      resizeMode="cover"
      imageStyle={{opacity: 0.25}}>
      <View style={[styles.container, styles.shadowStyle]}>
        <TextInput
          style={styles.textStyle}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numb => setEnteredNumb(numb)}
          value={enteredNumb}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonViewStyle}>
            <CustomButton onPress={onResetPress}>Reset</CustomButton>
          </View>
          <View style={styles.buttonViewStyle}>
            <CustomButton onPress={onConfirmPress}>Confirm</CustomButton>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    marginTop: 100,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  buttonViewStyle: {
    flex: 1,
  },
  shadowStyle: {
    elevation: 100,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textStyle: {
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
    fontSize: 10,
    padding: 0,
    width: 23,
    textAlign: 'center',
  },
});
