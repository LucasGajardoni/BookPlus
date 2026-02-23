function Header() {
    return (
        <header className="header-custom sticky-top">
            <div className="container d-flex align-items-center justify-content-between gap-4">

                {/* Logo */}
                <div className="d-flex align-items-center gap-2 shrink-0">
          <span className="material-symbols-outlined logo-icon">
            auto_stories
          </span>
                    <h1 className="logo-text">
                        BOOK PLUS
                    </h1>
                </div>

                {/* Pesquisa */}
                <div className="search-wrapper flex-grow-1">
                    <div className="search-box position-relative">
            <span className="material-symbols-outlined search-icon">
              search
            </span>
                        <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Encontre sua próxima leitura..."
                        />
                    </div>
                </div>

                {/* Menu */}
                <nav className="d-none d-lg-flex nav-custom">
                    <a href="#">Catálogo</a>
                    <a href="#">Lançamentos</a>
                    <a href="#">Mais Vendidos</a>
                </nav>

                <button className="btn login-btn">
                    Login Admin
                </button>

            </div>
        </header>
    );
}

export default Header;