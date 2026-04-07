import style from '../styles/StudentList.module.css'

import StudentItem from "./StudentItem";

function StudentList({ students, onDelete, onEdit }) {
  return (
    <div className={style.list}>
      {students.map((s) => (
        <StudentItem
          key={s.id}
          student={s}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default StudentList;