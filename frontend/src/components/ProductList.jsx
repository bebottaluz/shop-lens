import "./ProductList.css";
import ProductCard from "./ProductCard";

function ProductList() {

    const produtos = [
        {
            id: 1,
            nome: "Mouse Logitech G502",
            preco: "R$249,90",
            loja: "Kabum",
            imagem: "https://placehold.co/250x180"
        },
        {
            id: 2,
            nome: "Teclado Mecânico",
            preco: "R$399,90",
            loja: "Amazon",
            imagem: "https://placehold.co/250x180"
        },
        {
            id: 3,
            nome: "Monitor LG 24",
            preco: "R$899,90",
            loja: "Mercado Livre",
            imagem: "https://placehold.co/250x180"
        }
    ];

    return (
        <section className="products">
            {produtos.map((produto) => (
                <ProductCard
                    key={produto.id}
                    nome={produto.nome}
                    preco={produto.preco}
                    loja={produto.loja}
                    imagem={produto.imagem}
                />
            ))}
        </section>
    );
}

export default ProductList;