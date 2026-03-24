import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Catalogo from "./pages/Catalogo";
import Livro from "./pages/Livro";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Admin from "./pages/Admin";
import CadastroLivro from "./pages/CadastroLivro";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/livro/:id" element={<Livro />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/cadastro" element={<CadastroLivro />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;