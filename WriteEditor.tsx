import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

interface Props {
    title: string;
    body: string;
    onChangeTitle: React.Dispatch<React.SetStateAction<string>> | undefined;
    onChangeBody: React.Dispatch<React.SetStateAction<string>> | undefined;
}

export default function WriteEditor({ title, body, onChangeTitle, onChangeBody }: Props) {
    const bodyRef = useRef(null);
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.titleInput}
                placeholder='제목을 입력해 주세요'
                returnKeyType='next'
                value={title}
                onChangeText={onChangeTitle}
                onSubmitEditing={() => {
                    bodyRef.current.focus();
                }}
            />
            <TextInput
                style={styles.bodyInput}
                placeholder='당신의 오늘을 기록해보세요'
                multiline={true}
                textAlignVertical='top'
                value={body}
                onChangeText={onChangeBody}
                ref={bodyRef}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        padding: 16,
    },
    titleInput: {
        paddingVertical: 0,
        fontSize: 18,
        marginBottom: 16,
        color: '#263238',
        fontWeight: 'bold',
    },
    bodyInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 0,
        color: '#263238',
    },
});
