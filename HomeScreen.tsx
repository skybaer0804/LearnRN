import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { RootStackNavigationProp } from './RootStack';
import Profile from '../components/Profile';
import MessageForm from '../components/MessageForm';
import Counter from '../components/Counter';

export default function HomeScreen() {
    // useNavigation 사용시 Generic
    const navigation = useNavigation<RootStackNavigationProp>();
    const onPress = () => {
        navigation.navigate('Detail', { id: 1 });
    };

    return (
        <View>
            <Profile name='Wonjae' />
            <Button title='Open Detail' onPress={onPress} />
            <MessageForm />
            <Counter />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});
