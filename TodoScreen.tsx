import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import DateHead from '../components/DateHead';
import Empty from '../components/Empty';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import todosStorages from '../storages/todosStorages';

export default function TodoScreen() {
    const date = new Date();

    const [todos, setTodos] = useState([
        { id: 1, text: '작업환경 설정', done: true },
        { id: 2, text: '작업환경 설정1', done: false },
        { id: 3, text: '작업환경 설정2', done: true },
    ]);

    //불러오기
    useEffect(() => {
        todosStorages.get().then(setTodos).catch(console.error);
    }, []);

    //저장하기
    useEffect(() => {
        todosStorages.set(todos).catch(console.error);
    }, [todos]);

    const onInsert = (text: string) => {
        const nextId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
        const todo = {
            id: nextId,
            text, // 단축된 속성명(Shorthand property name) 문법, 현재 text 값을 파라미터로 받아오고 있는데, 이를 그대로 객체 text 속성으로 사용하겠다는 의미.
            done: false,
        };

        setTodos(todos.concat(todo));
    };

    const onToggle = (id: number) => {
        console.info('id ? ', id);
        const nextTodos = todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
        setTodos(nextTodos);
    };

    const onRemove = (id: number) => {
        const nextTodos = todos.filter((todo) => todo.id !== id);
        setTodos(nextTodos);
    };

    return (
        <SafeAreaView style={styles.full}>
            <KeyboardAvoidingView
                // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                behavior={Platform.select({ ios: 'padding' })}
                style={styles.avoid}
            >
                <DateHead date={date} />
                {todos.length === 0 ? (
                    <Empty />
                ) : (
                    <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
                )}
                <AddTodo onInsert={onInsert} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: 'white',
    },
    avoid: {
        flex: 1,
    },
});
