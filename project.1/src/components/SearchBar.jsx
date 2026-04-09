import style from '../styles/SearchBar.module.css'

function SearchBar({ setSearch }) {
  return (
    <input className={style.input}
      placeholder="Издөө..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;