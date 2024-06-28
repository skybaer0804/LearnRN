import React, { useState } from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
const App: () => Node = () => {
    const date = new Date();

    const [todos, setTodos] = useState([
        { id: 1, text: '작업환경 설정', done: true },
        { id: 2, text: '작업환경 설정1', done: false },
        { id: 3, text: '작업환경 설정2', done: true },
    ]);

    return (
        <SafeAreaView style={styles.full}>
            <KeyboardAvoidingView
                // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                behavior={Platform.select({ ios: 'padding' })}
                style={styles.avoid}
            >
                <DateHead date={date} />
                {todos.length === 0 ? <Empty /> : <TodoList todos={todos} />}
                <AddTodo />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: 'white',
    },
    avoid: {
        flex: 1,
    },
});

export default App;
