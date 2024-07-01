import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    StatusBar,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback,
    Keyboard,
} from 'react-native';

export default function AddTodo({ onInsert }) {
    const [text, setText] = useState('');

    const onPress = () => {
        onInsert(text);
        setText('');
        Keyboard.dismiss(); //현재 나타난 키보드를 닫는 함수.
    };

    const button = (
        <View style={styles.buttonStyle}>
            <Image
                source={require('../assets/icons/add_white/add_white.png')}
            />
        </View>
    );

    return (
        <View style={styles.block}>
            <TextInput
                placeholder="할일을 입력하세요."
                style={styles.input}
                value={text}
                onChangeText={setText}
                onSubmitEditing={onPress} // Enter를 눌렀을 때 호출되는 함수
                returnKeyType="done" // Enter타입을 지정, 타입에 따라 Enter부분에 보이는 설명 또는 아이콘이 바뀜.
            />
            {Platform.select({
                ios: (
                    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                        {button}
                    </TouchableOpacity>
                ),
                android: (
                    <View style={styles.circleWrapper}>
                        <TouchableNativeFeedback onPress={onPress}>
                            {button}
                        </TouchableNativeFeedback>
                    </View>
                ),
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 64,
        paddingHorizontal: 16, //좌우측에 padding값을 설정한다는 의미
        paddingVertical: 8, //위 아래 padding을 설정한다는 의미
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: '#26a69a',
        borderRadius: 24,
    },
    circleWrapper: {
        overflow: 'hidden',
        borderRadius: 24,
    },
});
