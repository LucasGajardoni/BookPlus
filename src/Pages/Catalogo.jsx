import { Link } from "react-router-dom";
import { useState } from "react";


function Catalogo() {

    const [livros, setLivros] = useState([]);
    const [autor, setAutor] = useState("");
    const [titulo, setTitulo] = useState("");

    async function buscarLivros(novoAutor, novoTitulo) {
        let url = "https://apps-api-livros.ucxocw.easypanel.host/livro?";

        if (novoAutor) url += `autor=${novoAutor}&`;
        if (novoTitulo) url += `titulo=${novoTitulo}`;

        const response = await fetch(url);
        const data = await response.json();

        setLivros(data.livros);
    }

    if (livros.length === 0) {
        buscarLivros("", "");
    }

    // 🔥 AQUI É O DIFERENTE (sem map)
    let listaLivros = [];

    for (let i = 0; i < livros.length; i++) {
        const livro = livros[i];

        listaLivros.push(
            <div className="col-md-3" key={livro.id}>
                <div className="book-card">

                    <div className="book-image-wrapper">
                        <Link to={`/livro/${livro.id}`} className="text-decoration-none">
                            <img src={livro.imagem} alt={livro.titulo} />
                        </Link>
                    </div>

                    <div className="book-info">
                        <p className="book-category">{livro.categoria}</p>
                        <h5 className="book-title">{livro.titulo}</h5>
                        <p className="book-author">{livro.autor}</p>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <div className="mb-4">
                <h2 className="section-title">Catálogo de Livros</h2>
                <p className="text-muted">Explore todos os livros disponíveis</p>
            </div>

            <div className="card p-3 mb-4 shadow-sm border-0">
                <div className="row g-3">

                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar por título..."
                            value={titulo}
                            onChange={(e) => {
                                const novoTitulo = e.target.value;
                                setTitulo(novoTitulo);
                                buscarLivros(autor, novoTitulo);
                            }}
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar por autor..."
                            value={autor}
                            onChange={(e) => {
                                const novoAutor = e.target.value;
                                setAutor(novoAutor);
                                buscarLivros(novoAutor, titulo);
                            }}
                        />
                    </div>

                </div>
            </div>

            <div className="row g-4">
                {listaLivros.length > 0 ? listaLivros : <p>Nenhum livro encontrado.</p>}
            </div>

        </div>
    );
}

export default Catalogo;