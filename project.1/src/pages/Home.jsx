import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

function Home() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [editStudent, setEditStudent] = useState(null);

  // 🔥 LOAD
  const fetchStudents = async () => {
    const q = query(
      collection(db, "students"),
      orderBy("createdAt", "desc")
    );

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

  // ❌ DELETE
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "students", id));
    fetchStudents();
  };

  // 🔍 FILTER
  const filteredStudents = students
    .filter((s) =>
      s.name?.toLowerCase().includes(search.toLowerCase())
    )
    .filter((s) => (status === "all" ? true : s.status === status));

  return (
    <div>
      <h1>Student CRM</h1>

      <StudentForm
        fetchStudents={fetchStudents}
        editStudent={editStudent}
        setEditStudent={setEditStudent}
      />

      <SearchBar setSearch={setSearch} />
      <FilterBar setStatus={setStatus} />

      <StudentList
        students={filteredStudents}
        onDelete={handleDelete}
        onEdit={setEditStudent}
      />
    </div>
  );
}

export default Home;