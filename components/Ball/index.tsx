import { View } from "react-native";
import { styles } from './styles';
import React from "react";

type Props = {
    backgroundColor: string,
}

export const Ball = ({ backgroundColor }: Props) => {
    return <View style={[styles.container, { backgroundColor: backgroundColor }]} />
}