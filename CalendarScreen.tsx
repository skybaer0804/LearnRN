import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';
import { useLogs } from '../context/LogContext';

function FadeInAndOut() {
    const animation = useRef(new Animated.Value(1)).current;

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        Animated.timing(animation, { toValue: hidden ? 0 : 1, useNativeDriver: true }).start();
    }, [hidden, animation]);

    return (
        <View>
            <Animated.View style={[styles.rectangle, { opacity: animation }]} />
            <Button
                title='Toggle Btn'
                onPress={() => {
                    setHidden(!hidden);
                }}
            />
        </View>
    );
}

function SlideLeftAndRight() {
    const animation = useRef(new Animated.Value(0)).current;

    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        Animated.timing(animation, { toValue: enabled ? 1 : 0, useNativeDriver: true }).start();
    }, [enabled, animation]);

    return (
        <View>
            <Animated.View
                style={[
                    styles.rectangle,
                    {
                        transform: [
                            {
                                translateX: animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 150],
                                }),
                            },
                        ],
                        opacity: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0],
                        }),
                    },
                ]}
            />
            <Button
                title='Toggle Btn'
                onPress={() => {
                    setEnabled(!enabled);
                }}
            />
        </View>
    );
}

export default function CalendarScreen() {
    const logs = useLogs();
    return (
        <View style={styles.block}>
            {/* <FadeInAndOut /> */}
            <SlideLeftAndRight />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {},
    text: {
        padding: 16,
        fontSize: 24,
    },
    rectangle: {
        width: 100,
        height: 100,
        backgroundColor: 'black',
    },
});
