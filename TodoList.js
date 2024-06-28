import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    StatusBar,
    Image,
    Platform,
    FlatList,
} from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
    return (
        <FlatList
            ItemSeparatorComponent={() => <View style={styles.separator} />} // 컴포넌트 사이에 무언가를 렌더링할 수 있음. 이를통해 구분선 View를 넣음.
            style={styles.list}
            data={todos} //데이터 설정 props
            renderItem={({ item }) => <TodoItem item={item} />} // 데이터(배열)안의 각 원소들을 데이터를 렌더링함.
            keyExtractor={(item) => item.id.toString()} // 각 항목의 고유 값을 추출해주는 함수. 숫자라면 .toString()으로 문자열로 변환해야함.
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
    },
});
