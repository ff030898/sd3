import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
      <Header />
      <div className="container m-auto">
      <h1 className="text-primary">DsVendas</h1>
      <h4 className="mt-3">Analise o desempenho das suas vendas por diversas expectativas</h4>
      <p className="mt-5">Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por uma api Spring Boot</p>
      <Link to="/dashboard">
      <button className="mt-3 btn btn-primary btn-lg bg-primary">Acessar Dashboard</button>
      </Link>
      </div>
      <Footer />
    </>
    )
}