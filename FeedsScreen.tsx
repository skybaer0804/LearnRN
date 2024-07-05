import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useLog, useSetLog } from '../context/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';

export default function FeedsScreen() {
    const log = useLog();
    const setLog = useSetLog();

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                value={log}
                onChangeText={setLog}
                placeholder='텍스트를 입력하세요'
            />
            <FloatingWriteButton />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    input: {
        padding: 16,
        backgroundColor: 'white',
    },
});
