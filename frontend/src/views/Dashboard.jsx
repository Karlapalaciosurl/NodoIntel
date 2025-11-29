import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [resumen, setResumen] = useState({total_income: 0, total_expense: 0, net_total: 0,});

  const [lista, setLista] = useState([]);

  const obtenerResumen = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/transactions/summary");
      const data = await res.json();
      setResumen(data || { total_income: 0, total_expense: 0, net_total: 0 });
    } catch (error) {
    }
  };

  const obtenerTransacciones = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/transactions");
      const data = await res.json();
      setLista(data || []);
    } catch (error) {
    }
  };

  useEffect(() => {
    obtenerResumen();
    obtenerTransacciones();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Dashboard</h2>

      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card text-bg-primary">
            <div className="card-body">
              <h5 className="card-title">Ingresos</h5>
              <p className="card-text fs-4"> Q {resumen.total_income.toFixed(2)} </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-bg-danger">
            <div className="card-body">
              <h5 className="card-title">Gastos</h5>
              <p className="card-text fs-4">
                Q {Math.abs(resumen.total_expense).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-bg-primary">
            <div className="card-body">
              <h5 className="card-title">Total Neto</h5>
              <p className="card-text fs-4">Q {resumen.net_total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="mb-3">Reporte de Looker Studio</h4>
    <div className="ratio ratio-16x9 mb-4">
     <iframe src="https://lookerstudio.google.com/embed/reporting/d1e51401-b409-4c05-abf2-2a85aa9edcf2/page/LuBV" title="Reporte" style={{ border: 0 }} allowFullScreen></iframe>
    </div>
      <h4 className="mb-3">Transacciones</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.date}</td>
              <td>{t.description}</td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
