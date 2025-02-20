import React, {useState} from 'react';
import {View, Text} from 'react-native';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const clear = () => {
    setNumber('0');
  };
  const deleteOperation = () => {
    if (number.length === 1) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const togglePositiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      //evaluar si es otro cero y hay un punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      //evaluar si es diferente de cero y no tiene un punto
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      //evitar 0000.0
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  };
  // render
  return {
    //properties
    number,
    

    //methods
    buildNumber,
    deleteOperation,
    clear,
    togglePositiveNegative,
  };
};
