import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from 'react-native';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import { useNavigation } from '@react-navigation/native';
import { Log, useLogs, useSetLogs } from '../context/LogContext';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { RootStackParmaList } from './RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParmaList>;

export default function WriteScreen() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigation = useNavigation<NavigationProp>();

    const logs = useLogs();
    const setLogs = useSetLogs();

    const onCreate = ({ title, body, date }: { title: string; body: string; date: string }) => {
        const log: Log = {
            id: uuidv4(),
            title,
            body,
            date,
        };
        const newLogs = [log, ...logs];
        setLogs(newLogs);
    };

    const onSave = () => {
        onCreate({ title, body, date: new Date().toISOString() });
        navigation.pop();
    };

    return (
        <SafeAreaView style={styles.block}>
            <KeyboardAvoidingView
                style={styles.avoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <WriteHeader onSave={onSave} />
                <WriteEditor title={title} body={body} onChangeTitle={setTitle} onChangeBody={setBody} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: 'white',
    },
    avoidingView: {
        flex: 1,
    },
});
