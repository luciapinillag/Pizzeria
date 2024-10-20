import React from 'react';
import { formatNumber } from '../utils/formateo';

function Cardpizza({producto}) {
    const {nombre, precio, descripcion, img} = producto;
    const ingredientes = descripcion.split(',').map(ingredientes => ingredientes.trim());
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={nombre} /> 
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text"><strong>Descripcion:</strong></p> 
                <ul className="list-group list-group-flush">
                    {ingredientes.map((ingredientes, index)=>(
                        <li key={index} className="list-group-item">{ingredientes}</li>
                    ))}
                </ul>
                <p className="card-text"><strong>Precio: ${formatNumber(precio)}</strong></p>
                <a href="#" className="btn btn-primary">Ver más 👀</a>
                <a href="#" className="btn btn-dark">Añadir 🛒</a>
            </div>
        </div>
    );
}

export default Cardpizza;
