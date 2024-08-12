import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor:Colors.PRIMARY
    }}
    >
        <Tabs.Screen 
  name='home' 
  options={{
    title: 'Home',
    tabBarIcon: ({ color }) => (
      <Ionicons name="home" size={24} color={color} />
    ),
  }}
/>

        <Tabs.Screen name='favourite'options={{title:"Favourite",tabBarIcon: ({ color }) => (
      <Ionicons name="heart" size={24} color={color} />
    )}}/>
        <Tabs.Screen name='inbox' options={{title:"Inbox",tabBarIcon: ({ color }) => (
      <Ionicons name="chatbubble" size={24} color={color} />
    )}}/>
        <Tabs.Screen name='profile' options={{title:"Profile",tabBarIcon: ({ color }) => (
      <Ionicons name="person" size={24} color={color} />
    )}}/>

    </Tabs>
  )
}