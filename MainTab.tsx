import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RootStackNavigationProp } from './RootStack';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';

type MainTabParamList = {
    Home: undefined;
    Account: undefined;
};

/**
 * 하단 네비게이션만 단독 사용한다면, BottomTabNavigationProp<MainTabParamList>만 충분합니다.
 * 그러나 하단 탭 네비게이션에서 그 상위에 있는 RootStack의 DetailScreen에 접근하려면 NavigationProp들을 합쳐줘야 합니다.
 */
export type MainTabNavigationProp = CompositeNavigationProp<
    RootStackNavigationProp,
    BottomTabNavigationProp<MainTabParamList>
>;

// 추후 RootStack 내부화면에서
// navigation.navigate('MainTab', { screen: 'Account' })가 가능하게 해줌
export type MainTabNavigationScreenParams = NavigatorScreenParams<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Account' component={AccountScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});
