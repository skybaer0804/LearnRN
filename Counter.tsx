import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

interface IncrementAction {
    type: 'increment';
}

interface DecrementAction {
    type: 'decrement';
    by: number;
}

type CounterAction = IncrementAction | DecrementAction;

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return {
                value: state.value + 1,
            };
        case 'decrement':
            return {
                value: state.value + action.by,
            };
        default:
            throw new Error('Unhandled action type');
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <View>
            <Text>{state.value}</Text>
            <Button title='+1' onPress={() => dispatch({ type: 'increment' })} />
            <Button title='-1' onPress={() => dispatch({ type: 'decrement', by: -1 })} />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});
