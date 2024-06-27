import React from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

const App: () => Node = () => {
    return (
        <SafeAreaView>
            <Box rounded={true} size={'small'} color={'blue'} />
            <Box rounded={true} size={'medium'} color={'tomato'} />
            <Box rounded={false} size={'large'} color={'green'} />
        </SafeAreaView>
    );
};

export default App;
