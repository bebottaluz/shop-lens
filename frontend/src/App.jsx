import { useState } from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [atualizar, setAtualizar] = useState(false);
  const [pesquisa, setPesquisa] = useState("");
  const [ordenacao, setOrdenacao] = useState("menor-preco");

  function atualizarProdutos() {
    setAtualizar((valorAnterior) => !valorAnterior);
  }

  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <SearchBar
          pesquisa={pesquisa}
          setPesquisa={setPesquisa}
        />

        <SortSelect
          ordenacao={ordenacao}
          setOrdenacao={setOrdenacao}
        />

        <ProductForm atualizarProdutos={atualizarProdutos} />

        <ProductList
          atualizar={atualizar}
          pesquisa={pesquisa}
          ordenacao={ordenacao}
        />
      </main>
    </>
  );
}

export default App;