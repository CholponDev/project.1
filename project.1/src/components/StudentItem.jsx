function StudentItem({ student, onDelete, onEdit }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h3>{student.name}</h3>
      <p>{student.phone}</p>
      <p>{student.course}</p>
      <p
        style={{
          color: student.status === "active" ? "green" : "gray",
        }}
      >
        {student.status}
      </p>

      <button onClick={() => onEdit(student)}>Edit</button>
      <button onClick={() => onDelete(student.id)}>Delete</button>
    </div>
  );
}

export default StudentItem;