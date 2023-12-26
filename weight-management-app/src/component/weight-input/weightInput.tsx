import React, { useState } from 'react';
import axios from 'axios';
import './weightInput.css';

const WeightInput: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [weight, setWeight] = useState<number | string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/data', {
        selectedDate: selectedDate,
        weight: weight,
      });

      if (response.status === 200) {
        console.log('データが正常に登録されました');
      } else {
        console.error('データの登録に失敗しました');
      }
    } catch (error) {
      console.error('ネットワークエラー:', error);
    }
  };

  return (
    <div className="weight-input">
      <p className="weight-input__text">【日付と体重を入力】</p>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="weight-input__date-input"
      />
      <br />
      <input
        className="weight-input__weight-num"
        type="number"
        name="quantity"
        min="1"
        max="100"
        value={weight}
        onChange={handleWeightChange}
      />
      <button className="weight-input__submit" onClick={handleSubmit}>
        登録
      </button>
    </div>
  );
};

export default WeightInput;
