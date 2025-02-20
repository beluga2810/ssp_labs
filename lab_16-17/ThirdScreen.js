// SecondScreen.js
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import FadeInView from './FadeInView';

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FadeInView text="Страница 3"/>
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});

export default ThirdScreen;