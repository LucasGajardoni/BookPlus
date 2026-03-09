function Cadastro() {
    return (
        <div className="container py-5">

            <div className="row justify-content-center">
                <div className="col-md-5">

                    <div className="card p-4 shadow-sm border-0">

                        <h2 className="section-title text-center mb-4">
                            Criar Conta
                        </h2>

                        <form>

                            <div className="mb-3">
                                <label className="form-label">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite seu nome"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Digite seu email"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Crie uma senha"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Confirmar Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirme a senha"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn login-btn w-100"
                            >
                                Criar Conta
                            </button>

                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Cadastro;