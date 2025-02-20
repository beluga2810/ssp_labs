import React, { useEffect } from 'react';
import { Animated, Text, View, Easing } from 'react-native';

const FadeInView = ({ text }) => {
  const scaleAnim = new Animated.Value(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
      { iterations: -1 }
    ).start();
  }, [scaleAnim]);

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>{text}</Text>
    </Animated.View>
  );
};

export default FadeInView;