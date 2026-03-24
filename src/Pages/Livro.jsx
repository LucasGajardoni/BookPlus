import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Livro() {

    const { id } = useParams();
    const [livro, setLivro] = useState(null);

    async function buscarLivro() {
        const response = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`);
        const data = await response.json();

        setLivro(data.livro);
    }

    useEffect(function () {
        buscarLivro();
    }, []);

    if (!livro) {
        return <div className="container py-5">Carregando...</div>;
    }

    return (
        <div className="container py-5">

            <div className="row align-items-center">

                <div className="col-md-4 text-center mb-4">
                    <img src={livro.imagem} className="img-fluid rounded shadow" />
                </div>

                <div className="col-md-8">

                    <h2>{livro.titulo}</h2>

                    <p className="text-muted">{livro.descricao}</p>

                    <p><strong>Autor:</strong> {livro.autor}</p>
                    <p><strong>Categoria:</strong> {livro.categoria}</p>
                    <p><strong>Faixa Etária:</strong> {livro.faixa_etaria}</p>

                </div>

            </div>

        </div>
    );
}

export default Livro;