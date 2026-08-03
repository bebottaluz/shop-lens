import "./SortSelect.css";

function SortSelect({ ordenacao, setOrdenacao }) {
  return (
    <div className="sort-container">
      <label htmlFor="ordenacao">Ordenar por:</label>

      <select
        id="ordenacao"
        value={ordenacao}
        onChange={(event) => setOrdenacao(event.target.value)}
      >
        <option value="menor-preco">Menor preço</option>
        <option value="maior-preco">Maior preço</option>
        <option value="az">Nome (A-Z)</option>
        <option value="za">Nome (Z-A)</option>
      </select>
    </div>
  );
}

export default SortSelect;