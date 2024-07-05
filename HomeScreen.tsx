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
    return (
        <View>
            <Profile name='Wonjae' />
            <Button title='Open Detail' onPress={() => navigation.navigate('Detail', { id: 1 })} />
            <MessageForm />
            <Counter />
            <Button title='TodoScreen 열기' onPress={() => navigation.navigate('TodoScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});
