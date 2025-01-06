import { useState } from 'react';
import BaseNumberInput from './components/BaseNumberInput';


const App = () => {
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');

  const handleDecimalChange = (value) => {
    setDecimal(value);
    setBinary(decimalToBinary(value));
  };

  const handleBinaryChange = (value) => {
    setBinary(value);
    setDecimal(binaryToDecimal(value));
  };

  const decimalToBinary = (decimal) => {
    if (decimal === '') return '';
    return parseInt(decimal, 10).toString(2);
  };

  const binaryToDecimal = (binary) => {
    if (binary === '') return '';
    return parseInt(binary, 2).toString(10);
  };

  return (
    <div className="container">
      <h1>Conversion de base</h1>
      <div>
        <label>Nombre décimal : </label>
        <BaseNumberInput value={decimal} onChangeBase={handleDecimalChange} />
      </div>
      <div>
        <label>Nombre binaire : </label>
        <BaseNumberInput value={binary} onChangeBase={handleBinaryChange} />
      </div>
    </div>
  );
};

export default App;
