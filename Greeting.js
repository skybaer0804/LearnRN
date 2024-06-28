import React from 'react';
import { View, Text } from 'react-native';

export default function Greeting(prop) {
    return (
        <View>
            <Text>It is Test</Text>
            <Text>name prop : {prop.name}</Text>
            <Text>name default prop : {prop.defaultName}</Text>
        </View>
    );
}

Greeting.defaultProps = {
    defaultName: '리엑트 네이티브!',
};
