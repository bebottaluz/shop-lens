import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.imagem} alt={props.nome} />

      <h3>{props.nome}</h3>

      <p>{props.preco}</p>

      <small>{props.loja}</small>

      <button>Ver Oferta</button>
    </div>
  );
}

export default ProductCard;
