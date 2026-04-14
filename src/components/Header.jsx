

   import React, { useState } from "react";
    import styles from "../styles/Header.module.css"


function Header() {
    <>

    {/* <div style={{
      height: 60,
      borderBottom: "1px solid #ccc",
      display: "flex",
      alignItems: "center",
      padding: "0 20px"
    }}>
      <h3>SRM</h3>
    </div> */}



    


    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-inner">

                {/* ЛОГО */}
                <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
                <span>alfacrm</span>
            </div>

            {/* МЕНЮ */}
            <nav className={styles.nav}>
                <a href="#">Главная</a>
                <a href="#">О нас</a>
                <a href="#">Контакты</a>
            </nav>

            {/* ПРАВАЯ ЧАСТЬ */}
            <div className={styles.right}>
{styles.burger}
                {/* БУРГЕР */}
                <div className="burger" onClick={() => setOpen(!open)}>
                    ☰
                </div>

                {/* DROPDOWN */}
                {open && (
                    <div className="dropdown">
                        <a href="#">📘 Уроки</a>
                        <a href="#">📦 Модули</a>
                        <a href="#">📅 Расписание</a>
                    </div>
                )}

                {/* КНОПКА */}
                <button className="auth-btn">
                    Регистрация / Вход
                </button>
            </div>

        </div>
    </header >
  );


export default Header;



    </>
    
    
  
}

export default Header;