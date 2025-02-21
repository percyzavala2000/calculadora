import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';

enum Operator {
  add = '+',
  substract = '-',
  multiply = '*',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operator>();
  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0) 
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
    lastOperation.current = undefined;
    setFormula('');
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

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };
  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setNumber(`${result}`);
    lastOperation.current = undefined;
    setPrevNumber('0');
  };
  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    if (isNaN(num2)) return num1;
    
    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.substract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error('Error al calcular');
    }
  };

  // render
  return {
    //properties
    number,
    prevNumber,
    formula,

    //methods
    buildNumber,
    deleteOperation,
    clear,
    togglePositiveNegative,
    setLastNumber,
    divideOperation,
    multiplyOperation,
    addOperation,
    substractOperation,
    calculateResult,
  };
};
