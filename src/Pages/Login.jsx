import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [alerta, setAlerta] = useState("");

    const navigate = useNavigate();

    async function login() {

        let retorno = await fetch("https://apps-api-livros.ucxocw.easypanel.host/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            })
        });

        retorno = await retorno.json();

        console.log(retorno);

        if (retorno.token) {
            setAlerta("Login realizado com sucesso");

            localStorage.setItem("token", retorno.token);
            localStorage.setItem("usuario_nome", retorno.usuario.nome);
            localStorage.setItem("usuario_email", retorno.usuario.email);

            navigate("/catalogo");

        } else {
            setAlerta("Email ou senha inválidos");
        }
    }

    useEffect(function () {
        let token = localStorage.getItem("token");

        if (token) {
            navigate("/admin");
        }
    }, []);

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-5">

                    <div className="card p-4 shadow-sm border-0">

                        <h2 className="section-title text-center mb-4">
                            Login
                        </h2>

                        <div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Digite seu email"
                                    value={email}
                                    onChange={function (e) {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Digite sua senha"
                                    value={senha}
                                    onChange={function (e) {
                                        setSenha(e.target.value)
                                    }}
                                />
                            </div>

                            <button
                                className="btn login-btn w-100"
                                onClick={login}
                            >
                                Entrar
                            </button>

                            <p className="text-center mt-3">
                                Não tem conta? <a href="/cadastro">Criar conta</a>
                            </p>

                            <p className="text-center mt-2 text-danger">
                                {alerta}
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;