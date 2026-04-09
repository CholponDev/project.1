import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        {/* ЛОГО */}
        <div className="logo">
          <div className="logoIcon"></div>
          <span>alfacrm</span>
        </div>

        {/* МЕНЮ */}
        <nav className="nav">
          <ul>
            <li>Главная</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </nav>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className="right">
          <button className="authBtn">Вход / Регистрация</button>

          {/* БУРГЕР */}
          <div className="burger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* БУРГЕР МЕНЮ */}
      <div className={`menu ${open ? "active" : ""}`}>
        <div className="overlay" onClick={() => setOpen(false)}></div>

        <div className="panel">
          <h3>Меню</h3>
          <ul>
            <li>Уроки</li>
            <li>Модули</li>
            <li>Расписание</li>
            <li>vxzczxczxczczx</li>
          </ul>
        </div>
      </div>

      {/* ПРОСТО КОНТЕНТ */}
      <div className="content">
        <h1>Главная страница</h1>
      </div>
    </>
  );
}

export default Home;