function Footer() {
    return (
        <footer className="footer-custom">

            <div className="container">

                <div className="footer-top">

                    <div className="footer-left">

                        <div className="footer-logo">
                            <span className="material-symbols-outlined logo-icon">
                                auto_stories
                            </span>
                            <span className="logo-text">
                                BOOK PLUS
                            </span>
                        </div>

                        <p className="footer-description">
                            Sua livraria digital de confiança.
                            Uma curadoria minimalista das obras
                            mais impactantes para o seu crescimento.
                        </p>

                        <div className="footer-social">
                            <span className="material-symbols-outlined">
                                share
                            </span>
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                        </div>

                    </div>

                    <div className="footer-links-grid">

                        <div>
                            <h4>Explorar</h4>
                            <a href="#">Lançamentos</a>
                            <a href="#">Mais Vendidos</a>
                            <a href="#">E-books</a>
                        </div>

                        <div>
                            <h4>Suporte</h4>
                            <a href="#">Ajuda</a>
                            <a href="#">Envios</a>
                            <a href="#">Trocas</a>
                        </div>

                        <div>
                            <h4>Institucional</h4>
                            <a href="#">Sobre Nós</a>
                            <a href="#">Contato</a>
                            <a href="#">Privacidade</a>
                        </div>

                    </div>

                </div>

                <div className="footer-bottom">
                    <div>
                        © 2024 Book Plus. Todos os direitos reservados.
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;