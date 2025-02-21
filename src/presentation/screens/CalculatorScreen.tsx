import React from 'react';
import {View, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {
 const{number,prevNumber,buildNumber,clear,deleteOperation,togglePositiveNegative,addOperation,divideOperation,multiplyOperation,substractOperation,calculateResult}= useCalculator();
  // render
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={globalStyles.mainResult}>{number}</Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={globalStyles.subResult}>{ (prevNumber==='0')?'': prevNumber}</Text>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={clear} label="C" color={colors.lightGray} blackText={true} />
        <CalculatorButton onPress={togglePositiveNegative} label="+/- " color={colors.lightGray} blackText={true} />
        <CalculatorButton onPress={deleteOperation} label=" del" color={colors.lightGray} blackText={true} />
        <CalculatorButton onPress={divideOperation} label="÷" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={()=>buildNumber('7')} label="7" color={colors.darkGray} />
        <CalculatorButton onPress={()=>buildNumber('8')} label="8" color={colors.darkGray} />
        <CalculatorButton onPress={()=>buildNumber('9')} label="9" color={colors.darkGray} />
        <CalculatorButton onPress={multiplyOperation} label="X" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={()=>buildNumber('4')} label="4" color={colors.darkGray} />
        <CalculatorButton onPress={()=>buildNumber('5')} label="5" color={colors.darkGray} />
        <CalculatorButton onPress={()=>buildNumber('6')} label="6" color={colors.darkGray} />
        <CalculatorButton onPress={substractOperation} label="-" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={()=>buildNumber('1')} label="1" color={colors.darkGray} />
        <CalculatorButton onPress={()=>buildNumber('2')} label="2" color={colors.darkGray} />
        <CalculatorButton onPress={()=>buildNumber('3')} label="3" color={colors.darkGray} />
        <CalculatorButton onPress={addOperation} label="+" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={()=>buildNumber("0")} label="0" color={colors.darkGray} doubleSize={true} />
        <CalculatorButton onPress={()=>buildNumber(".")} label="." color={colors.darkGray} />
        <CalculatorButton onPress={calculateResult} label="=" color={colors.orange} />
      </View>
    </View>
  );
};
