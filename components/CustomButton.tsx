import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export const CustomButton = ({children, onPress}: any): JSX.Element => {
  return (
    <View style={styles.customButtonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: 'darkorange'}}
        style={styles.customButtonInnerContainer}>
        <Text style={styles.customButtonStyle}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  customButtonInnerContainer: {
    padding: 5,
  },
  customButtonOuterContainer: {
    backgroundColor: 'orange',
    marginLeft: 10,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  customButtonStyle: {
    fontSize: 12,
    fontWeight: '800',
    fontFamily: 'Exo-Thin',
    textTransform: 'uppercase',
  },
});
