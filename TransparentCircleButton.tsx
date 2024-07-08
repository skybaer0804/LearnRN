import React from 'react';
import { View, StyleSheet, Pressable, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
    name: string;
    color: string;
    hasMarginRight?: boolean;
    onPress?: () => void | undefined;
}

export default function TransparentCircleButton({ name, color, hasMarginRight, onPress }: Props) {
    return (
        <View style={[styles.iconButtonWrapper, hasMarginRight && styles.marginRight]}>
            <Pressable
                style={({ pressed }) => [
                    styles.iconButton,
                    Platform.OS === 'ios' &&
                        pressed && {
                            backgroundColor: '#efefef',
                        },
                ]}
                onPress={onPress}
                android_ripple={{ color: '#ededed' }}
            >
                <Icon name={name} size={24} color={color} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    iconButtonWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: 'hidden',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    marginRight: {
        marginRight: 8,
    },
});
