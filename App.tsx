import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { styles } from './styles';
import { Ball } from './components/Ball';

const App = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: -1,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim2, {
          toValue: 1.6,
          duration: 1000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim2, {
          toValue: -1.6,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim2, {
          toValue: 0,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [rotateAnim, rotateAnim2]);

  const rotation = rotateAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-30deg', '30deg'],
  });

  const rotation2 = rotateAnim2.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-30deg', '30deg'],
  });

  const inverseRotation = rotateAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['30deg', '-30deg'],
  });

  const inverseRotation2 = rotateAnim2.interpolate({
    inputRange: [-1, 1],
    outputRange: ['30deg', '-30deg'],
  });
  return (
    <View style={styles.container}>
      <View style={styles.base} />
      <View style={{ flexDirection: 'row' }}>
        <Animated.View style={{ transform: [{ translateY: -100 }] }}>
          <Animated.View style={[styles.rope, { transform: [{ rotate: rotation }, { translateY: 100 }] }]}>
            <Animated.View style={{ transform: [{ rotate: inverseRotation }] }}>
              <Ball backgroundColor='#888' />
            </Animated.View>
          </Animated.View>
        </Animated.View>
        <Animated.View style={{ transform: [{ translateY: -100 }] }}>
          <Animated.View style={[styles.rope, { transform: [{ rotate: rotation2 }, { translateY: 100 }] }]}>
            <Animated.View style={{ transform: [{ rotate: inverseRotation2 }] }}>
              <Ball backgroundColor='#AAA' />
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default App;
