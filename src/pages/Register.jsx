import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import styles from "../styles/Register.module.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: form.name,
        email: form.email,
        role: form.role,
        createdAt: serverTimestamp(),
      });

      setForm({
        name: "",
        email: "",
        password: "",
        role: "user",
      });
    } catch (err) {
      setError(err.message || "Registration error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.backgroundGlow}></div>

      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>Create Account</h1>
            <p className={styles.subtitle}>
              Start managing your system
            </p>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.form}>
            <input
              className={styles.input}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
            />

            <input
              className={styles.input}
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />

            <input
              className={styles.input}
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
            />

            <select
              className={styles.select}
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className={styles.button}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;