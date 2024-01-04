import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  base: {
    width: 100,
    height: 20,
    backgroundColor: 'black',
  },
  rope: {
    width: 2,
    height: 200,
    backgroundColor: 'gray',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    bottom: -10,
    borderRadius: 25,
    backgroundColor: 'blue',
  },
});