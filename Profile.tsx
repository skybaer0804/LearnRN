import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
    name: string;
    isActive?: boolean;
    image?: string;
    children?: React.ReactNode;
}

export default function Profile({ name, isActive, image, children }: Props) {
    return (
        <View style={isActive && styles.activeStyle}>
            {/* <Image source={require('../assets/images/profile/jpg')} /> */}
            <Text>{name}</Text>
            <View>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    activeStyle: {
        backgroundColor: 'yellow',
    },
});
