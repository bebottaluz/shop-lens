import "./SearchBar.css";

function SearchBar({ pesquisa, setPesquisa }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={pesquisa}
        onChange={(event) => setPesquisa(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;