// src/components/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import styles from "../styles/Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await addDoc(collection(db, "users"), {
        email: user.email,
        createdAt: serverTimestamp(),
      });

      navigate("/");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Этот email уже зарегистрирован");
      } else if (err.code === "auth/invalid-email") {
        setError("Неверный формат email");
      } else if (err.code === "auth/weak-password") {
        setError("Слабый пароль (минимум 6 символов)");
      } else {
        setError("Ошибка: " + err.message);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Регистрация</h2>

        <form onSubmit={handleRegister} className={styles.form}>
          
          <div className={styles.inputGroup}>
            <span className={styles.icon}>📧</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}>🔒</span>
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}>🔑</span>
            <input
              type="password"
              placeholder="Подтвердите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.button}>
            Зарегистрироваться
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;