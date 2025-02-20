// SecondScreen.js
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import FadeInView from './FadeInView';

const SecondScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FadeInView text="Страница 2"/>
      <Button title="Далее" onPress={() => navigation.navigate('ThirdScreen')} />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SecondScreen;