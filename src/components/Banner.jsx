function Banner() {
    return (
        <section className="hero-section">
            <img
                className="hero-bg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfmiFAGbUFa0lTX5XasEEjKiwcVkFbXwoEzo8yCgHVgq5hSkEWsYsWYOg8XwwZG72fhd7h5b0P1i7pYf9ph9jcJtRuconesMJPn1GnHSu902LHK6AQr8xb4F53ylLXhqFiXedW-nVmENvmAhiDX_Rwr_BBDIwZalBQRqo5rr0zUZ4UxTKCejP__dfAxIbSNd5NN7vExip_mU0Wz4cn8zDRHWV7LfSXJXjVWl721PPNvh1jpRMdZPY5fgIBc5IV36Tjipxv60FkQVUv"
                alt="Ambiente"
            />

            <div className="hero-gradient"></div>

            <div className="container hero-content text-white">
                <div>
          <span className="badge bg-light text-dark mb-4">
            Curadoria Exclusiva
          </span>

                    <h1 className="hero-title mb-4">
                        Descubra seu <br />
                        <span className="hero-highlight">
              próximo capítulo.
            </span>
                    </h1>

                    <p className="lead mb-4">
                        Mergulhe em histórias que transformam.
                    </p>

                    <button className="btn btn-light me-3">
                        Explorar Catálogo
                    </button>

                    <button className="btn btn-outline-light">
                        Ver Promoções
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Banner;