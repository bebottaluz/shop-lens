import { useState } from "react";
import { createProduct } from "../services/api";
import "./ProductForm.css";

function ProductForm({ atualizarProdutos }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [loja, setLoja] = useState("");
  const [imagem, setImagem] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const produto = {
      nome,
      preco: Number(preco),
      loja,
      imagem,
    };

    try {
      await createProduct(produto);

      atualizarProdutos();

      alert("Produto cadastrado!");

      setNome("");
      setPreco("");
      setLoja("");
      setImagem("");
    } catch (error) {
      alert("Erro ao cadastrar.");
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Produto</h2>

      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <input
        type="text"
        placeholder="Loja"
        value={loja}
        onChange={(e) => setLoja(e.target.value)}
      />

      <input
        type="text"
        placeholder="URL da imagem"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
      />

      <button type="submit">
        Cadastrar Produto
      </button>
    </form>
  );
}

export default ProductForm;