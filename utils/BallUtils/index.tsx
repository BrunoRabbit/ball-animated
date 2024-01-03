type Props = {
    upForce: number;
    gravity: number;
    velocity: number;
    posY: number;
    setUpforce: React.Dispatch<React.SetStateAction<number>>;
    setVelocity: React.Dispatch<React.SetStateAction<number>>;
    setPosY: React.Dispatch<React.SetStateAction<number>>;
}

export const applyGravity = ({ gravity, upForce, velocity, posY, setUpforce, setVelocity, setPosY }: Props) => {
    // ? decreasing upforce
    let newUpforce = upForce - gravity;
    newUpforce = newUpforce < 0 ? 0 : newUpforce;
    setUpforce(newUpforce);

    // ? Modifying velocity
    let newVelocity = velocity + (gravity - (newUpforce / 2));
    setVelocity(newVelocity);

    // ? setting new position based on speed
    let newPosY = posY - newVelocity;

    if (newPosY < 0) {
        newPosY = 0;
        setVelocity(0);
    }

    setPosY(newPosY);
};
