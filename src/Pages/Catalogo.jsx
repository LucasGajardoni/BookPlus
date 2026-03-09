import { Link } from "react-router-dom";
function Catalogo() {
    return (
        <div className="container py-5">

            <div className="mb-4">
                <h2 className="section-title">Catálogo de Livros</h2>
                <p className="text-muted">Explore todos os livros disponíveis</p>
            </div>

            <div className="card p-3 mb-4 shadow-sm border-0">

                <div className="row g-3">

                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar livro..."
                        />
                    </div>

                    <div className="col-md-4">
                        <select className="form-select">
                            <option>Filtrar por Autor</option>
                            <option>Machado de Assis</option>
                            <option>J.K Rowling</option>
                            <option>George Orwell</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <select className="form-select">
                            <option>Filtrar por Categoria</option>
                            <option>Romance</option>
                            <option>Ficção</option>
                            <option>Fantasia</option>
                            <option>Terror</option>
                        </select>
                    </div>

                </div>

            </div>


            <div className="row g-4">


                <div className="col-md-3">
                    <div className="book-card">
                        <div className="book-image-wrapper">
                            <Link to="/livro/1" className="text-decoration-none">
                            <img
                                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                                alt="Livro"
                            />
                            </Link>

                        </div>

                        <div className="book-info">
                            <p className="book-category">Ficção</p>
                            <h5 className="book-title">1984</h5>
                            <p className="book-author">George Orwell</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="book-card">
                        <div className="book-image-wrapper">
                            <Link to="/livro/1" className="text-decoration-none">
                            <img
                                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                                alt="Livro"
                            />
                            </Link>
                        </div>

                        <div className="book-info">
                            <p className="book-category">Fantasia</p>
                            <h5 className="book-title">Harry Potter</h5>
                            <p className="book-author">J.K Rowling</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Catalogo;