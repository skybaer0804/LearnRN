import React, { useState, useEffect } from 'react';
import {
    Platform,
    SafeAreaView,
    StatusBar,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    Image,
    FlatList,
    Alert,
} from 'react-native';
import { useLog } from '../context/LogContext';

export default function CalendarScreen() {
    const log = useLog();
    return (
        <View>
            <Text style={styles.text}>Log : {log}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    text: {
        padding: 16,
        fontSize: 24,
    },
});
