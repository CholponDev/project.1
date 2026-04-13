import { Link } from "react-router-dom";
import style from "../styles/Sidebar.module.css"

function Sidebar() {
  return (
    <div className={style.sidebar} >
      <h2 className={style.logo}>CRM</h2>

      <nav className={style.nav} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Link className={style.link} to="/">Students</Link>
        <Link className={style.link} to="/analytics">Analytics</Link>
        <Link className={style.link} to="/tasks">Tasks</Link>
        <Link className={style.link} to="/kanban">Kanban</Link>
        <Link className={style.link} to="/todo">To Do</Link>

      </nav>
    </div>
  );
}

export default Sidebar;