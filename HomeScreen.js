import React, { useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    useEffect(() => {
        navigation.setOptions({ title: '홈' });
    }, [navigation]);

    return (
        <View style={styles.block}>
            <Button
                title="Detail 1 열기"
                onPress={() => navigation.navigate('Detail', { id: 1 })}
                // onPress={() => navigation.push('Detail')}
            />
            <Button
                title="Detail 2 열기"
                onPress={() => navigation.navigate('Detail', { id: 2 })}
                // onPress={() => navigation.push('Detail')}
            />
            <Button
                title="Detail 3 열기"
                onPress={() => navigation.navigate('Detail', { id: 3 })}
                // onPress={() => navigation.push('Detail')}
            />
            <Button
                title="Headerless 열기"
                onPress={() => navigation.navigate('Headerless')}
            />
            <Button
                title="TodoScreen 열기"
                onPress={() => navigation.navigate('TodoScreen')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});
