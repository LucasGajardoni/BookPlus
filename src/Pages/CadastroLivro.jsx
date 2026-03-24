import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function CadastroLivro() {

    const navigate = useNavigate();

    useEffect(function () {
        let token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        }
    }, []);

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");
    const [faixa, setFaixa] = useState("");







    async function cadastrar() {

        let token = localStorage.getItem("token");
        const response = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                titulo,
                autor,
                categoria,
                descricao,
                imagem,
                faixa_etaria: faixa
            })
        });

        const data = await response.json();
        console.log(data);
        navigate("/admin");
    }

    return (
        <div className="container py-5">

            <h2>Cadastrar Livro</h2>

            <input className="form-control mb-2" placeholder="Título"
                   onChange={(e) => setTitulo(e.target.value)} />

            <input className="form-control mb-2" placeholder="Autor"
                   onChange={(e) => setAutor(e.target.value)} />

            <input className="form-control mb-2" placeholder="Categoria"
                   onChange={(e) => setCategoria(e.target.value)} />

            <input className="form-control mb-2" placeholder="Imagem URL"
                   onChange={(e) => setImagem(e.target.value)} />

            <input className="form-control mb-2" placeholder="Faixa Etária"
                   onChange={(e) => setFaixa(e.target.value)} />

            <textarea className="form-control mb-2" placeholder="Descrição"
                      onChange={(e) => setDescricao(e.target.value)} />

            <button className="btn btn-primary" onClick={cadastrar}>
                Cadastrar
            </button>

        </div>
    );
}

export default CadastroLivro;