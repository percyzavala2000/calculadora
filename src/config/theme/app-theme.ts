import { StyleSheet } from 'react-native';


 export const colors={
  darkGray:'#2D2D2D',
  lightGray:'#9B9B9B',
  orange:'#FF9427',

  textPrymary:'#FFFFFF',
  textSecondary:'#666666',
  background:'#000000',
 }

 export const globalStyles=StyleSheet.create({
  background:{
    backgroundColor:colors.background,
    flex:1
  },
  calculatorContainer:{
    flex:1,
    paddingHorizontal:20,
    justifyContent:'flex-end'
  },
  mainResult:{
    fontSize:70,
    color:colors.textPrymary,
    textAlign:'right',
    marginBottom:10,
    fontWeight:'400'

  },
  subResult:{
    fontSize:40,
    color:colors.textSecondary,
    textAlign:'right',
    marginBottom:10,
    fontWeight:'300'
  },

  

 })