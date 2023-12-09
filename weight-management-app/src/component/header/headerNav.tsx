import React, { useState } from 'react';
import './headerNav.css';

const headerNav: React.FC = () => {
  return (
    <div className="nav-menu">
      <p className="nav-menu__ttl">【基本情報設定】</p>
      <p className="nav-menu__text">目標体重</p>
      <input className="nav-menu__weight-num" type="number" name="quantity" min="1" max="100"/> kg
      <input type="submit" value="変更"/>
      <p className="nav-menu__text">身長</p>
      <input className="nav-menu__weight-num" type="number" name="quantity" min="140" max="200"/> cm
      <input type="submit" value="変更"/>
    </div>
  );
}

export default headerNav;
