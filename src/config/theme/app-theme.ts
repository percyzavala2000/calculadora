import { Platform, StyleSheet } from 'react-native';


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
  row:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:Platform.OS==='ios'?5:18,
    paddingHorizontal:10,
    
  },
  button:{
    height:80,
    width:80,
    backgroundColor:colors.darkGray,
    borderRadius:100,
    justifyContent:'center',
    marginHorizontal:10
  },
  buttonText:{
    textAlign:'center',
    padding:10,
    fontSize:30,
    fontWeight:'300',
    color:colors.textPrymary
  }
  

  

 })