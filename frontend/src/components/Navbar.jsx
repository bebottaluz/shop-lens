import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <div className="logo-icon">🔎</div>

          <h1>
            Shop<span>Lens</span>
          </h1>
        </div>

        <nav className="menu">
          <a href="#">Início</a>

          <a href="#">Produtos</a>

          <a href="#">Favoritos</a>

          <button className="user-button">Entrar</button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
