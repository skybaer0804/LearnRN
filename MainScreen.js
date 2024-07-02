import React from 'react';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import NotificationScreen from './NotificationScreen';
import MessageScreen from './MessageScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator(); //하단탭
export default function MainScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#fb8c00', // 아이콘 색상 변경
                showLabel: false, // 라벨 텍스트 숨기기
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: '홈',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                    tabBarBadge: 'new', // tab badge
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    title: '검색',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    title: '알림',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="notifications" color={color} size={size} />
                    ),
                    tabBarBadge: 30, // tab badge
                }}
            />
            <Tab.Screen
                name="Message"
                component={MessageScreen}
                options={{
                    title: '메시지',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="message" color={color} size={size} />
                    ),
                    tabBarBadge: true, // tab badge
                }}
            />
        </Tab.Navigator>
    );
}

// 머티리얼 하단탭
// const Tab = createMaterialBottomTabNavigator(); //머티리얼 하단탭
// export default function MainScreen() {
//     return (
//         <Tab.Navigator
//             initialRouteName="Home"
//             tabBarOptions={{
//                 showIcon: true,
//             }}
//             activeColor="black"
//             screenOptions={{
//                 activeColor: 'yellow',
//             }}
//         >
//             <Tab.Screen
//                 name="Home"
//                 component={HomeScreen}
//                 options={{
//                     tabBarLabel: '홈',
//                     tabBarIcon: ({ color }) => (
//                         <Icon name="home" color={'black'} size={24} />
//                     ),
//                     tabBarColor: 'balck', //활성화된 탭에 따라 탭 바의 배경색을 변경
//                     tabBarBadge: 'new', // tab badge
//                 }}
//             />
//             <Tab.Screen
//                 name="Search"
//                 component={SearchScreen}
//                 options={{
//                     tabBarLabel: '검색',
//                     tabBarIcon: ({ color }) => (
//                         <Icon name="search" color={color} size={24} />
//                     ),
//                     tabBarColor: 'gray',
//                 }}
//             />
//             <Tab.Screen
//                 name="Notification"
//                 component={NotificationScreen}
//                 options={{
//                     tabBarLabel: '알림',
//                     tabBarIcon: ({ color }) => (
//                         <Icon name="notifications" color={color} size={24} />
//                     ),
//                     tabBarColor: 'green',
//                     tabBarBadge: 30, // tab badge
//                 }}
//             />
//             <Tab.Screen
//                 name="Message"
//                 component={MessageScreen}
//                 options={{
//                     tabBarLabel: '메시지',
//                     tabBarIcon: ({ color }) => (
//                         <Icon name="message" color={color} size={24} />
//                     ),
//                     tabBarColor: 'blue',
//                     tabBarBadge: true, // tab badge
//                 }}
//             />
//         </Tab.Navigator>
//     );
// }
