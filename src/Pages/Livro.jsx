import { useParams } from "react-router-dom";

function Livro() {

    const { id } = useParams();

    return (
        <div className="container py-5">

            <div className="row align-items-center">

                <div className="col-md-4 text-center mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                        alt="Livro"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "400px" }}
                    />
                </div>

                <div className="col-md-8">

                    <h2 className="mb-3">1984</h2>

                    <p className="text-muted mb-4">
                        Uma história distópica que mostra uma sociedade controlada por um
                        governo totalitário onde tudo é vigiado.
                    </p>

                    <div className="mb-2">
                        <strong>Autor:</strong> George Orwell
                    </div>

                    <div className="mb-2">
                        <strong>Categoria:</strong> Ficção
                    </div>

                    <div className="mb-2">
                        <strong>Faixa Etária:</strong> 14+
                    </div>

                    <div className="mt-4">
                        <strong>ID do livro:</strong> {id}
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Livro;