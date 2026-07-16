import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [texto, setTexto] = useState("");

  function pesquisar() {
    alert("Você pesquisou: " + texto);
  }

  return (
    <section className="search">
      <h2>🔍 Encontre o menor preço</h2>

      <input
        type="text"
        placeholder="Pesquise um produto..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button onClick={pesquisar}>Buscar</button>
    </section>
  );
}

export default SearchBar;
