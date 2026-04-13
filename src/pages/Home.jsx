import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebase";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import style from "../styles/Home.module.css"

function Home() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

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

  const filteredStudents = students
    .filter((s) =>
      s.name?.toLowerCase().includes(search.toLowerCase())
    )
    .filter((s) => (status === "all" ? true : s.status === status));

  return (
    <div className={style.container}>
      <h1 className={style.title}>Students</h1>

      <div className={style.controls}>
        <SearchBar setSearch={setSearch} />
        <FilterBar setStatus={setStatus} />
      </div>

      
      <div className={style.listWrapper}>
        <StudentList
        students={filteredStudents}
        onDelete={() => {}}
        onEdit={() => {}}
        isAdmin={false}
      />
      </div>
      
    </div>
  );
}

export default Home;