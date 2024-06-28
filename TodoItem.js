import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    StatusBar,
    Image,
    FlatList,
} from 'react-native';

export default function TodoItem({ item }) {
    return (
        <View style={styles.item}>
            <View style={[styles.circle, item.done && styles.filled]}>
                {item.done && (
                    <Image
                        source={require('../assets/icons/check_white/check_white.png')}
                    />
                )}
            </View>
            <Text style={[styles.text, item.done && styles.lineThrough]}>
                {item.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: '#26a69a',
        borderWidth: 1,
        marginRight: 16,
    },
    filled: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26a69a',
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#212121',
    },
    lineThrough: {
        color: '#9e9e9e',
        textDecorationLine: 'line-through',
    },
});
