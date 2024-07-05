import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RootStackNavigationProp } from './RootStack';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TodoScreen from './TodoScreen';
import FeedsScreen from './FeedsScreen';
import SearchScreen from './SearchScreen';
import CalendarScreen from './CalendarScreen';

type MainTabParamList = {
    Home: undefined;
    Account: undefined;
    Message: undefined;
    Notification: undefined;
    Todo: undefined;
    Feeds: undefined;
    Search: undefined;
    Calendar: undefined;
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
        <Tab.Navigator
            initialRouteName='Feeds'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'blue', // 활성화된 탭의 색상
                tabBarInactiveTintColor: 'gray', // 비활성화된 탭의 색상
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: '홈',
                    tabBarIcon: ({ color, size }) => <Icon name='home' color={color} size={size} />,
                    // tabBarBadge: true, // tab badge
                }}
            />
            <Tab.Screen
                name='Feeds'
                component={FeedsScreen}
                options={{
                    title: '피드',
                    tabBarIcon: ({ color, size }) => <Icon name='view-stream' color={color} size={size} />,
                    tabBarBadge: 'new', // tab badge
                }}
            />
            <Tab.Screen
                name='Calendar'
                component={CalendarScreen}
                options={{
                    title: '메시지',
                    tabBarIcon: ({ color, size }) => <Icon name='event' color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    title: '검색',
                    tabBarIcon: ({ color, size }) => <Icon name='notifications' color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name='Todo'
                component={TodoScreen}
                options={{
                    title: 'TODO 리스트',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='playlist-add-check' color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});
