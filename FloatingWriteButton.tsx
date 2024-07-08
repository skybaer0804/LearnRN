import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Platform, StyleSheet, Pressable, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStackParmaList } from '../screens/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParmaList>;

export default function FloatingWriteButton(props: { hidden: boolean }) {
    const { hidden } = props;
    const navigation = useNavigation<NavigationProp>();

    const onPress = () => {
        navigation.navigate('Write');
    };

    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Animated.timing(animation, {
        //     toValue: hidden ? 1 : 0,
        //     useNativeDriver: true,
        // }).start();
        Animated.spring(animation, {
            toValue: hidden ? 1 : 0,
            useNativeDriver: true,
            tension: 45, // 강도(기본값 40)
            friction: 5, // 감속(기본값 7)
            // speed: 12, // 속도(기본값 12)
            // bounciness: 8, // 탄력성(기본값 8)
        }).start();
    }, [hidden, animation]);

    return (
        <Animated.View
            style={[
                styles.wrapper,
                {
                    transform: [
                        {
                            translateY: animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 88],
                            }),
                        },
                    ],
                    opacity: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                    }),
                },
            ]}
        >
            {/* Pressable은 Touchable 컴포넌트와 비슷함. 기능이 더 많습니다.
            android_ripple 프롭스를 설정해 안드로이드에서 물결 효과를 보여줄 수 있고, pressed 값을 인식해 동적인 스타일 적요이 가능합니다.
             */}
            <Pressable
                style={(pressed) => [styles.button, Platform.OS === 'ios' && { opacity: pressed ? 0.6 : 1 }]}
                android_ripple={{ color: 'white' }}
                onPress={onPress}
            >
                <Icon name='add' size={24} style={styles.icon} />
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,
        // iOS 전용 그림자 설정
        shadowColor: '#4d4d4d',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // 안드로이드 전용 그림자 설정
        elevation: 5,
        // 안드로이드에서 물결 효과가 영역 밖으로 나가지 않도록 설정
        // iOS에서는 overflow가 hidden일 경우 그림자가 보여지지 않음
        overflow: Platform.select({ android: 'hidden' }),
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#009688',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: 'white',
    },
});
