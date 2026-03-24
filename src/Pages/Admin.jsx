import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

function Admin() {

    const navigate = useNavigate();

    useEffect(function () {
        let token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        }
    }, []);

    const [livros, setLivros] = useState([]);

    async function buscar() {
        const response = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro");
        const data = await response.json();

        setLivros(data.livros);
    }

    async function excluir(id) {
        let token = localStorage.getItem("token");
        const response = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data);
        buscar();
    }

    useEffect(function () {
        buscar();
    }, []);

    return (
        <div className="container py-5">

            <h2>Administração de Livros</h2>

            <a href="/admin/cadastro" className="btn btn-primary mb-3">
                Novo Livro
            </a>

            <table className="table">

                <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Ações</th>
                </tr>
                </thead>

                <body>
                {livros.map((livro) => (
                    <tr key={livro.id}>
                        <td>{livro.id}</td>
                        <td>{livro.titulo}</td>
                        <td>{livro.autor}</td>

                        <td>
                            <button className="btn btn-warning me-2">
                                Editar
                            </button>

                            <button className="btn btn-danger"
                                    onClick={function () {
                                        excluir(livro.id)
                                    }}>
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))}
                </body>

            </table>

        </div>
    );
}

export default Admin;