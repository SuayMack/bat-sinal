import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home', 
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
      name="form" 
      options={{ 
        title: 'Formulário',
        tabBarIcon: ({ color }) => <MaterialIcons name="note" size={24} color={color} />
      }} 
      />
    </Tabs>
  );
}