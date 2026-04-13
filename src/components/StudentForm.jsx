import { useEffect, useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db, serverTimestamp } from "../firebase/firebase";

import style from "../styles/StudentForm.module.css";

function StudentForm({ fetchStudents, editStudent, setEditStudent }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    status: "active",
  });

  // Если редактируем студента, заполняем форму
  useEffect(() => {
    if (editStudent) setForm(editStudent);
  }, [editStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.course) return;

    try {
      if (editStudent) {
        await updateDoc(doc(db, "students", editStudent.id), form);
        setEditStudent(null);
      } else {
        await addDoc(collection(db, "students"), {
          ...form,
          createdAt: serverTimestamp(),
        });
      }

      setForm({ name: "", phone: "", course: "", status: "active" });
      fetchStudents();
    } catch (err) {
      console.error("Ошибка добавления/редактирования студента:", err);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="Имя"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className={style.input}
        placeholder="Телефон"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        className={style.input}
        placeholder="Курс"
        value={form.course}
        onChange={(e) => setForm({ ...form, course: e.target.value })}
      />
      <select
        className={style.select}
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="active">Active</option>
        <option value="finished">Finished</option>
      </select>
      <button className={style.button} type="submit">
        {editStudent ? "Обновить" : "Добавить"}
      </button>
    </form>
  );
}

export default StudentForm;