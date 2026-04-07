import style from '../styles/FilterBar.module.css'

function FilterBar({ setStatus }) {
  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => setStatus("all")}>All</button>
      <button className={style.button} onClick={() => setStatus("active")}>Active</button>
      <button className={style.button} onClick={() => setStatus("finished")}>Finished</button>
    </div>
  );
}

export default FilterBar;