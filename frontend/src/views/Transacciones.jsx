import React, { useState, useEffect } from "react";

export default function Transacciones() {
    const [formulario, setForm] = useState({id: "", date: "",description: "",amount: "",category: "",});
    const [lista, setLista] = useState([]);
    const [mostrarForm, setMostrarForm] = useState(false);

    const obtenerTransacciones = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/transactions");
      const data = await res.json();
      setLista(data || []);
    } catch (error) {
    }
  };

    useEffect(() => {
    obtenerTransacciones();
  }, []);

  
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({...prev, [name]: value,}));
  };

    const guardarForm = async (e) => {
    e.preventDefault();

    const payload = {
    id: Number(formulario.id),
    date: formulario.date,
    description: formulario.description,
    amount: Number(formulario.amount),
    category: formulario.category
    };
        try {
      await fetch("http://127.0.0.1:8000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setForm({ id: "", date: "", description: "", amount: "", category: "",});
      setMostrarForm(false);
      obtenerTransacciones();
    } catch (error) {
      console.error("Error al guardar transacción", error);
    }
  };

return (
  <div className="container py-4">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h2 className="mb-0">Transacciones</h2>
      <button type="button" className="btn btn-primary" onClick={() => setMostrarForm(!mostrarForm)}>Agregar</button>
    </div>

    {mostrarForm && (
      <form onSubmit={guardarForm} className="mb-4">
        <div className="row g-3">
          <div className="col-md-2">
            <label className="form-label">ID</label>
            <input type="number" name="id" className="form-control" value={formulario.id} onChange={manejarCambio} required/>
          </div>
          <div className="col-md-3">
            <label className="form-label">Fecha</label>
            <input type="date" name="date" className="form-control" value={formulario.date} onChange={manejarCambio} required />
          </div>
          <div className="col-md-4">
            <label className="form-label">Descripción</label>
            <input type="text" name="description" className="form-control" value={formulario.description} onChange={manejarCambio} required />
          </div>
          <div className="col-md-3">
            <label className="form-label">Monto</label>
            <input type="number" step="0.01" name="amount" className="form-control" value={formulario.amount} onChange={manejarCambio} required />
          </div>
          <div className="col-md-4">
            <label className="form-label">Categoría</label>
            <input type="text" name="category" className="form-control" value={formulario.category} onChange={manejarCambio} required />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Guardar transacción</button>
        <button type="button" className="btn btn-secondary mt-3 ms-2" onClick={() => setMostrarForm(false)}>Cancelar</button>
      </form>
    )}

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
            <td>{ new Date(t.date).toLocaleDateString("es-ES") }</td>
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