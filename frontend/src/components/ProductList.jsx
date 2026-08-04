import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ atualizar, pesquisa, ordenacao }) {
  const [produtos, setProdutos] = useState([]);

  async function carregarProdutos() {
    try {
      const dados = await getProducts();
      setProdutos(dados);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, [atualizar]);

  const produtosFiltrados = useMemo(() => {
    const lista = produtos.filter((produto) => {
      return (
        (produto.nome ?? "")
  .toLowerCase()
  .includes(pesquisa.toLowerCase()) ||
(produto.loja ?? "")
  .toLowerCase()
  .includes(pesquisa.toLowerCase())
      );
    });

    lista.sort((a, b) => {
      switch (ordenacao) {
        case "menor-preco":
          return a.preco - b.preco;

        case "maior-preco":
          return b.preco - a.preco;

        case "az":
          return a.nome.localeCompare(b.nome);

        case "za":
          return b.nome.localeCompare(a.nome);

        default:
          return 0;
      }
    });

    return lista;
  }, [produtos, pesquisa, ordenacao]);

  return (
    <section className="products">
      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        produtosFiltrados.map((produto) => (
          <ProductCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            loja={produto.loja}
            imagem={produto.imagem}
          />
        ))
      )}
    </section>
  );
}

export default ProductList;