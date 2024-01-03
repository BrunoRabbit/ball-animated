import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ballController: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    margin: 20,
  },
  ballControllerText: {
    color: '#FFF'
  },
  ballControllerButton: {
    flex: 1,
    height: 100,
    backgroundColor: '#0061FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});