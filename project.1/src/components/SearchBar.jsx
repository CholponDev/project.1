function SearchBar({ setSearch }) {
  return (
    <input
      placeholder="Издөө..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;