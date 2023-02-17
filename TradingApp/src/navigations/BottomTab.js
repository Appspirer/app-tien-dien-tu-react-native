import React from 'react';
import { Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Stonks, Mail, Board, Chat, Profile } from '../screens';
import Icons from '../themes/Icons';
import Color from '../themes/Color';
import Images from '../themes/Images';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: Color.main,
                borderTopWidth:0
            }
        }}>
            <Tab.Screen
                name="Stonks"
                component={Stonks}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? "chart_focus" : "chart", height: 20.53, width: 20 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Mail"
                component={Mail}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? "mail_focus" : "mail", height: 19.18, width: 25.34 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Board"
                component={Board}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? "board_focus" : "board", height: 20.31, width: 22.21 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? "chat_focus" : "chat", height: 21.3, width: 23.06 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={Images.avatar} style={{ height: 22, width: 22 }} />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}