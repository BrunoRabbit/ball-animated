import { View } from 'react-native';
import { styles } from './styles';
import { BallController } from './components/BallController';
import { Ball } from './components/Ball';
import { useEffect, useState } from 'react';
import { applyGravity } from './utils/BallUtils/index';

let timer: number;

const App = () => {
  const [gravity, setGravity] = useState(.98);
  const [upForce, setUpforce] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [posY, setPosY] = useState(0);

  const props = { gravity, upForce, velocity, posY, setUpforce, setVelocity, setPosY };

  useEffect(() => {
    () => applyGravity(props);

    window.clearTimeout(timer);
    timer = window.setTimeout(() => applyGravity(props), 30);
  }, [gravity, upForce, velocity, posY]);

  const _handleForceBtn = () => {
    setUpforce(7);
  }

  return (
    <View style={styles.container}>
      <View style={styles.ballArea}>
        <Ball posY={posY} />
      </View>

      <BallController
        posY={posY}
        upForce={upForce}
        velocity={velocity}
        handleForceBtn={_handleForceBtn}
      />
    </View>
  );
}

export default App;