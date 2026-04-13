import style from '../styles/StudentItem.module.css'

function StudentItem({ student, onDelete, onEdit, isAdmin }) {
  {isAdmin && (
  <div className={style.buttons}>
    <button onClick={() => onEdit(student)}>Edit</button>
    <button onClick={() => onDelete(student.id)}>Delete</button>
  </div>
)}

  return (
    <div className={style.card} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h3 className={style.name}>{student.name}</h3>
      <p className={style.text}>{student.phone}</p>
      <p className={style.text}>{student.course}</p>
      <p className={style.status}
        style={{
          color: student.status === "active" ? "green" : "gray",
        }}
      >
        {student.status}
      </p>
      <div className={style.buttons}>
        <button className={style.editButton} onClick={() => onEdit(student)}>Edit</button>
        <button className={style.deleteButton} onClick={() => onDelete(student.id)}>Delete</button>
      </div>
      
    </div>
  );
}

export default StudentItem;