import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';

enum Operator {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operator>();

  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
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
    const num1 = Number(number);
    const num2 = Number(prevNumber);
    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operator.substract:
        setNumber(`${num2 - num1}`);
        break;
      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;
      default:
        throw new Error('Error al calcular');
    }
    setPrevNumber('0');
  };

  // render
  return {
    //properties
    number,
    prevNumber,

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
