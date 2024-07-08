import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import FeedList from '../components/FeedList';
import { useLogs } from '../context/LogContext';

export default function FeedsScreen() {
    const logs = useLogs();
    const [hidden, setHidden] = useState(false);

    const onScrollToBottom = (isBottom: boolean) => {
        if (hidden !== isBottom) {
            setHidden(isBottom);
        }
    };

    return (
        <View style={styles.block}>
            <FeedList logs={logs} onScrollToBottom={onScrollToBottom} />
            <FloatingWriteButton hidden={hidden} />
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
