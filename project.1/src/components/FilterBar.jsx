function FilterBar({ setStatus }) {
  return (
    <div>
      <button onClick={() => setStatus("all")}>All</button>
      <button onClick={() => setStatus("active")}>Active</button>
      <button onClick={() => setStatus("finished")}>Finished</button>
    </div>
  );
}

export default FilterBar;