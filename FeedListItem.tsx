import React, { useState, useEffect } from 'react';
import { Platform, Text, StyleSheet, Pressable } from 'react-native';
import { Log } from '../context/LogContext';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

function formatDate(date: string): string {
    const d = new Date(date);
    const now = Date.now();
    const diff = (now - d.getTime()) / 1000;

    if (diff < 60 * 1) {
        return '방금 전';
    }
    if (diff < 60 * 60 * 24 * 3) {
        return formatDistanceToNow(d, { addSuffix: true, locale: ko });
    }
    return format(d, 'PPP EEE p', { locale: ko });
}

function turncate(text: string): string {
    // 정규식으로 모든 줄 바꿈 문자 제거
    const replaced = text.replace(/\n/g, ' ');
    if (replaced.length <= 100) {
        return replaced;
    } else {
        return replaced.slice(0, 100).concat('...');
    }
}

export default function FeedListItem(props: { log: Log }) {
    const { log } = props;
    const { title, body, date } = log;
    return (
        <Pressable
            style={({ pressed }) => [
                styles.block,
                Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' },
            ]}
            android_ripple={{ color: '#ededed' }}
        >
            <Text style={styles.date}>{formatDate(date)}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{turncate(body)}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    date: {
        fontSize: 12,
        color: '#546e7a',
        marginBottom: 8,
    },
    title: {
        color: '#263238',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    body: {
        color: '#37474f',
        fontSize: 16,
        lineHeight: 21,
    },
});
