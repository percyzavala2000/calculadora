/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { CalculatorScreen } from './src/presentation/screens/CalculatorScreen';
import { globalStyles } from './src/config/theme/app-theme';

const App = () => {
// render
  return (
    <View style={globalStyles.background} >
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <CalculatorScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
