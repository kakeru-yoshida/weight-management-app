import React from 'react';
import './weightInput.css';

const WeightInput: React.FC = () => {
  return (
    <div className="weight-input">
      <p className="weight-input__text">【今日の体重を入力】</p>
      <input className="weight-input__weight-num" type="number" name="quantity" min="1" max="100"/>
      <input type="submit" value="登録"/>
    </div>
  );
}

export default WeightInput;
