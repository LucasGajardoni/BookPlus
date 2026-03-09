import {Link} from "react-router-dom";

function BookCard() {
    return (
        <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-5">
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
          <span className="book-category">
            Poesia
          </span>

                    <h6 className="book-title">
                        O Silêncio do Mar
                    </h6>

                    <p className="book-author">
                        Helena Vasconcelos
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BookCard;