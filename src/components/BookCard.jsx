import {Link} from "react-router-dom";

function BookCard({livro}) {
    return (
        <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-5">
            <div className="book-card">
                <div className="book-image-wrapper">
                    <Link to={`/livro/${livro.id}`} className="text-decoration-none">
                        <img src={livro.imagem} alt={livro.titulo} />
                    </Link>
                </div>

                <div className="book-info">
            <span className="book-category">
                {livro.categoria}
            </span>

                    <h6 className="book-title">
                        {livro.titulo}
                    </h6>

                    <p className="book-author">
                        {livro.autor}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BookCard;