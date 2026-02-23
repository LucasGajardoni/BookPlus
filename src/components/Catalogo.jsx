import BookCard from "./BookCard";

function Catalogo() {
    return (
        <section className="container py-5">

            {/* TOPO */}
            <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-4 mb-5">

                <div>
                    <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="line-decor"></div>
                        <span className="section-subtitle">
                            Novidades
                        </span>
                    </div>

                    <h2 className="section-title">
                        Destaques da Semana
                    </h2>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <button className="filter-btn">
                        <span className="material-symbols-outlined">
                            filter_list
                        </span>
                    </button>

                    <select className="order-select">
                        <option>Ordenar por: Relevância</option>
                        <option>Mais recentes</option>
                        <option>Menor preço</option>
                    </select>
                </div>

            </div>

            {/* GRID DE LIVROS */}
            <div className="row g-4">

                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />

            </div>

            {/* BOTÃO FINAL */}
            <div className="text-center mt-5">
                <button className="catalog-btn">
                    Ver Catálogo Completo
                </button>
            </div>

        </section>
    );
}

export default Catalogo;