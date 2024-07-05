import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainTab, { MainTabNavigationScreenParams } from './MainTab';
import TodoScreen from './TodoScreen';
import WriteScreen from './WriteScreen';

/*
 * TypeScript에서 네이티브 스택 네비게이션을 사용할 때는 어떤 화면에 어떤 파라미터가 필요한지 정의하는 StackParamList 타입을 정의해줘야 합니다.
 * 이 타입을 사용하면 다른 화면을 띄울때 화면의 이름과 라우트 파라미터를 검증 할 수 있습니다.
 * interface가 아닌 type을 사용해서 선언해야 합니다.
 */
export type RootStackParmaList = {
    MainTab: MainTabNavigationScreenParams;
    TodoScreen: MainTabNavigationScreenParams;
    Detail: {
        id: number;
    };
    Write: MainTabNavigationScreenParams;
};

/*
 * useNavigation 사용시 NativeStackNavigationProp 을 선언해야 합니다.
 * 선언한 타입을 useNavigation의 Generic으로 지정해줘야합니다. push, pop을 사용하기 위함.
 * 네이티브 스택의 경우에는 NativeStackNavigationProp을 불러와서 선언할 수 있습니다.
 * export로 추후 내비게이션을 감싸서 불러와서 사용.
 */
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParmaList>;

const Stack = createNativeStackNavigator<RootStackParmaList>();

type DetailScreenRouteProp = RouteProp<RootStackParmaList, 'Detail'>;

function DetailScreen() {
    const { params } = useRoute<DetailScreenRouteProp>();
    return (
        <View>
            <Text>Detail {params.id}</Text>
        </View>
    );
}

export default function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen component={MainTab} name='MainTab' options={{ headerShown: false }} />
            <Stack.Screen component={DetailScreen} name='Detail' />
            <Stack.Screen component={TodoScreen} name='TodoScreen' />
            <Stack.Screen component={WriteScreen} name='Write' options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});
