import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function TodoItem({ item, onToggle, onRemove }) {
    const remove = () => {
        Alert.alert(
            '삭제', //제목
            '정말로 삭제하시겠어요?', //내용
            [
                // 버튼 배열
                { text: '취소', onPress: () => {}, style: 'cancel' }, //style은 iOS에서만 가능, cancel, default, destructive
                {
                    text: '삭제',
                    onPress: () => {
                        onRemove(item.id);
                    },
                    style: 'destructive',
                },
            ],
            {
                // 옵션 객체
                cancelable: true,
                onDismiss: () => {},
            },
        );
    };

    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => onToggle(item.id)}>
                <View style={[styles.circle, item.done && styles.filled]}>
                    {item.done && <Image source={require('../assets/icons/check_white/check_white.png')} />}
                </View>
            </TouchableOpacity>
            <Text style={[styles.text, item.done && styles.lineThrough]}>{item.text}</Text>
            <TouchableOpacity onPress={remove}>
                {item.done ? (
                    <Icon name='delete' size={32} color='red' />
                ) : (
                    <View style={styles.removePlaceholder} />
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: '#26a69a',
        borderWidth: 1,
        marginRight: 16,
    },
    filled: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26a69a',
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#212121',
    },
    lineThrough: {
        color: '#9e9e9e',
        textDecorationLine: 'line-through',
    },
    removePlaceholder: {
        // 삭제아이콘이 보이지 않을 때도 보일 영역을 미리 차지해 두기 위함.
        width: 32,
        height: 32,
    },
});
