import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackParmaList } from '../screens/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TransparentCircleButton from './TransparentCircleButton';

type NavigationProp = NativeStackNavigationProp<RootStackParmaList>;

export default function WriteHeader(props: { onSave: () => void }) {
    const { onSave } = props;
    const navigation = useNavigation<NavigationProp>();
    const onGoBack = () => {
        navigation.pop();
    };
    return (
        <View style={styles.block}>
            <View style={styles.iconButtonWrapper}>
                <TransparentCircleButton onPress={onGoBack} name={'arrow-back'} color={'#424242'} />
            </View>
            <View style={styles.buttons}>
                <TransparentCircleButton name={'delete-forever'} color={'#ef5350'} hasMarginRight />
                <TransparentCircleButton name={'check'} color={'#009688'} hasMarginRight onPress={onSave} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 48,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconButtonWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: 'hidden',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
