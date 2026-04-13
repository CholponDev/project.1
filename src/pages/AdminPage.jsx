import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";

import style from "../styles/AdminPage.module.css"
import { db } from "../firebase/firebase";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

function AdminPage() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = async () => {
    const q = query(collection(db, "students"), orderBy("createdAt", "desc"));
    const data = await getDocs(q);
    const arr = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStudents(arr);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "students", id));
    fetchStudents();
  };

  const filteredStudents = students
    .filter((s) =>
      s.name?.toLowerCase().includes(search.toLowerCase())
    )
    .filter((s) => (status === "all" ? true : s.status === status));

  return (
    <div className={style.container}>
      <h1 className={style.title}>Admin Panel</h1>

      <div className={style.formWrapper}>
         <StudentForm
        fetchStudents={fetchStudents}
        editStudent={editStudent}
        setEditStudent={setEditStudent}
      />
      </div>

     
     <div className={style.controls}>
      <SearchBar setSearch={setSearch} />
      <FilterBar setStatus={setStatus} />
     </div>
      

      <div className={style.listWrapper}>
        <StudentList
        students={filteredStudents}
        onDelete={handleDelete}
        onEdit={setEditStudent}
        isAdmin={true}
      />
      </div>
      
    </div>
  );
}

export default AdminPage;