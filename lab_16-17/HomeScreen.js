import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import FadeInView from './FadeInView';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FadeInView text="Добро пожаловать"/>
      <Button title="Далее" onPress={() => navigation.navigate('SecondScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;