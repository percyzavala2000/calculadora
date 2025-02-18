import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../config/theme/app-theme';

export const CalculatorScreen = () => {
// render
  return (
    <View style={globalStyles.calculatorContainer} >
      <View style={{paddingHorizontal:20,paddingBottom:20}}>

      <Text style={globalStyles.mainResult}  >1500</Text>
      <Text style={globalStyles.subResult} >15</Text>
      
      </View>
    </View>
  )
}
