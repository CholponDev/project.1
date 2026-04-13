import styles from "../styles/StudentList.module.css";

function StudentList({ students, onDelete, onEdit, isAdmin }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {students.map((s, index) => (
          <div
            key={s.id}
            className={styles.card}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className={styles.content}>
              <div className={styles.avatar}>
                {s.name?.charAt(0)?.toUpperCase()}
              </div>

              <div className={styles.info}>
                <p className={styles.name}>{s.name}</p>
                <p className={styles.subtitle}>Student ID: {s.id}</p>
              </div>
            </div>

            {isAdmin && (
              <div className={styles.actions}>
                <button
                  className={styles.editBtn}
                  onClick={() => onEdit(s)}
                >
                  Edit
                </button>

                <button
                  className={styles.deleteBtn}
                  onClick={() => onDelete(s.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;