import { BarChart } from "components/BarChart";
import { DonutChart } from "components/DonutChart";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Table } from "components/table";

export function Dashboard() {
    return (
        <>
      <Header />
      <div className="container mt-5 mb-5">
      <h1 className="text-primary">Dashboard de Vendas</h1>
      <div className="row px-3 mt-5">
        <div className="col-sm-6">
          <h5 className="text-center">Taxa de sucesso (%)</h5>
          <BarChart />
        </div>
        <div className="col-sm-6">
          <h5 className="text-center">Todas as vendas</h5>
          <DonutChart />
        </div>
      </div>

      <h1 className="text-primary mt-5 mb-5">Todas as Vendas</h1>
      <Table />
      </div>
      <Footer />
    </>
    )
}