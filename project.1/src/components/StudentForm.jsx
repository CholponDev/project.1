import style from '../styles/StudentForm.module.css'

import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, serverTimestamp } from "../firebase/firebase";

function StudentForm({ fetchStudents, editStudent, setEditStudent }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    status: "active",
  });

  useEffect(() => {
    if (editStudent) {
      setForm(editStudent);
    }
  }, [editStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.course) return;

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
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input className={style.input}
        placeholder="Аты"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input className={style.input}
        placeholder="Телефон"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input className={style.input}
        placeholder="Курс"
        value={form.course}
        onChange={(e) => setForm({ ...form, course: e.target.value })}
      />

      <select className={style.select}
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="active">Active</option>
        <option value="finished">Finished</option>
      </select>

      <button className={style.button}
       type="submit">
        {editStudent ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default StudentForm;