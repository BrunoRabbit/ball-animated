import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  ballArea: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
  },
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