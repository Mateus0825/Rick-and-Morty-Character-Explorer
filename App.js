import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import CharactersDetailScreen from './src/screens/CharacterDetailScreen.js';
import CharactersListScreen from './src/screens/CharactersListScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CharactersList">
        <Stack.Screen name="CharactersList" component={CharactersListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CharactersDetail" component={CharactersDetailScreen} options={{ headerShown: false }} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}