import React, { useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Counter from './components/Counter';

const App: () => Node = () => {
    const [count, setCount] = useState(0);

    const onIncrease = () => setCount(count + 1);

    const onDecrease = () => setCount(count - 1);

    return (
        <SafeAreaView style={styles.full}>
            <Counter
                count={count}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: 'cyan',
    },
});

export default App;
