import React from 'react';
import './pastWeight.css';

const pastWeight: React.FC = () => {
  return (
    <div className="past-weight">
      <p className="past-weight__text">【過去体重一覧】</p>
      <ul>
        <li className="past-weight__list-child">
          <p className="past-weight__list-child__day">2023年12月8日</p>
          <p className="past-weight__list-child__weight">75.5kg</p>
        </li>
        <li className="past-weight__list-child">
          <p className="past-weight__list-child__day">2023年12月8日</p>
          <p className="past-weight__list-child__weight">75.5kg</p>
        </li>
        <li className="past-weight__list-child">
          <p className="past-weight__list-child__day">2023年12月8日</p>
          <p className="past-weight__list-child__weight">75.5kg</p>
        </li>
      </ul>
    </div>
  );
}

export default pastWeight;
