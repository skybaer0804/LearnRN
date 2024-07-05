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

export default function MessageScreen() {
    return (
        <View style={styles.block}>
            <Text>MessageScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});
