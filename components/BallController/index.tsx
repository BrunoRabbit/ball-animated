import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
    // upForce: number,
    // velocity: number,
    posY: number,
    handleForceBtn: () => void,
}

export const BallController = ({  posY, handleForceBtn }: Props) => {
    return (
        <View style={styles.ballController}>
            <View>
                {/* <Text style={styles.ballControllerText}>UpForce: {upForce.toFixed(2)}</Text>
                <Text style={styles.ballControllerText}>Velocity: {velocity.toFixed(2)}</Text> */}
                <Text style={styles.ballControllerText}>PosY: {posY.toFixed(2)}</Text>

            </View>
            <TouchableOpacity style={styles.ballControllerButton} onPress={handleForceBtn} >
                <Text style={styles.ballControllerText}>Fazer força </Text>
            </TouchableOpacity>
        </View>
    );
}