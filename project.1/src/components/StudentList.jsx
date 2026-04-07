import StudentItem from "./StudentItem";

function StudentList({ students, onDelete, onEdit }) {
  return (
    <div>
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