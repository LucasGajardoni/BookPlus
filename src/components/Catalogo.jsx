import { useState } from "react";
import BookCard from "../components/BookCard";

export default function Catalogo() {

    const [livros, setLivros] = useState([]);
    const [autor, setAutor] = useState("");
    const [titulo, setTitulo] = useState("");

    async function buscarLivros(novoAutor = autor, novoTitulo = titulo) {
        let url = "https://apps-api-livros.ucxocw.easypanel.host/livro?";

        if (novoAutor) url += `autor=${novoAutor}&`;
        if (novoTitulo) url += `titulo=${novoTitulo}`;

        const response = await fetch(url);
        const data = await response.json();

        setLivros(data.livros);
    }

    // 🔥 carrega inicial SEM useEffect
    if (livros.length === 0) {
        buscarLivros("", "");
    }

    // 🔥 sem map
    let listaLivros = [];

    for (let i = 0; i < livros.length; i++) {
        const livro = livros[i];

        listaLivros.push(
            <BookCard key={livro.id} livro={livro} />
        );
    }

    return (
        <div className="container mt-4">

            <h2 className="mb-4">Catálogo de Livros</h2>

            <div className="mb-4 d-flex gap-2">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar por autor"
                    value={autor}
                    onChange={(e) => {
                        const novoAutor = e.target.value;
                        setAutor(novoAutor);
                        buscarLivros(novoAutor, titulo);
                    }}
                />

                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar por título"
                    value={titulo}
                    onChange={(e) => {
                        const novoTitulo = e.target.value;
                        setTitulo(novoTitulo);
                        buscarLivros(autor, novoTitulo);
                    }}
                />

            </div>

            <div className="row">
                {listaLivros.length > 0 ? (
                    listaLivros
                ) : (
                    <p>Nenhum livro encontrado.</p>
                )}
            </div>

        </div>
    );
}