import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotificationScreen() {
    return (
        <View style={styles.block}>
            <Text>NotificationScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});
