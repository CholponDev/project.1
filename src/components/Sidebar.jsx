import { Link } from "react-router-dom";
import style from "../styles/Sidebar.module.css"
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>


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





    {/* <NavLink 
  to="/" 
  className={({ isActive }) => 
    isActive ? `${style.link} ${style.active}` : style.link
  }
>
  Students
</NavLink>

<NavLink 
  to="/analytics" 
  className={({ isActive }) => 
    isActive ? `${style.link} ${style.active}` : style.link
  }
>
  Analytics
</NavLink>

<NavLink 
  to="/tasks" 
  className={({ isActive }) => 
    isActive ? `${style.link} ${style.active}` : style.link
  }
>
  Tasks
</NavLink>

<NavLink 
  to="/kanban" 
  className={({ isActive }) => 
    isActive ? `${style.link} ${style.active}` : style.link
  }
>
  Kanban
</NavLink>

<NavLink 
  to="/todo" 
  className={({ isActive }) => 
    isActive ? `${style.link} ${style.active}` : style.link
  }
>
  To Do
</NavLink> */}

    </>
  );
}

export default Sidebar;