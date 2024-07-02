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
    TouchableOpacity,
    Alert,
    Button,
    SafeAreaView,
} from 'react-native';

export default function HeaderlessScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.block}>
            <View style={styles.block}>
                <Text>Header가 없네</Text>
                <Button onPress={() => navigation.pop()} title="뒤로가기" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});
