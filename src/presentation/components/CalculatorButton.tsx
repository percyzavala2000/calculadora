import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

type CalculatorButtonProps = {
  label: string;
  color?:string,
  doubleSize?:boolean,
  blackText?:boolean
};


const CalculatorButton = ({ label,color=colors.darkGray,doubleSize=false,blackText=false}:CalculatorButtonProps) => {

  // render
  return (
    <Pressable style={({pressed})=>({...globalStyles.button,backgroundColor:color,opacity:(pressed)?0.8:1,width:(doubleSize)?180:80})}>
      <Text style={{...globalStyles.buttonText,color:blackText?"black":"white"}}>{label}</Text>
    </Pressable>
  );
};

export default CalculatorButton;

