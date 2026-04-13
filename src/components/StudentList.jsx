function StudentList({ students, onDelete, onEdit, isAdmin }) {
  return (
    <div>
      {students.map((s) => (
        <div key={s.id}>
          <p>{s.name}</p>
          {isAdmin && (
            <>
              <button onClick={() => onEdit(s)}>Edit</button>
              <button onClick={() => onDelete(s.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;