import React, { useState } from 'react';
import { productos } from '../utils/pizzas'; 
import { formatNumber } from '../utils/formateo';

function Cart() {
   
    const initialCart = productos.map(pizza => ({ ...pizza, cantidad: 0 }));
    const [cart, setCart] = useState(initialCart);

    const increaseQuantity = (id) => {
        setCart(cart.map(pizza =>
            pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
        ));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map(pizza => {
            if (pizza.id === id) {
                const newQuantity = pizza.cantidad - 1;
                return { ...pizza, cantidad: newQuantity >= 0 ? newQuantity : 0 };
            }
            return pizza;
        }).filter(pizza => pizza.cantidad > 0)); // Filtra las pizzas con cantidad 0
    };

    const total = cart.reduce((acc, pizza) => acc + pizza.precio * pizza.cantidad, 0);

    return (
        <div className="centered-cart">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Carrito de Compra 🛒</h5>
                            {cart.filter(pizza => pizza.cantidad > 0).length === 0 ? (
                                <p className="card-text">El carrito está vacío</p>
                            ) : (
                                <ul className="list-group">
                                    {cart.filter(pizza => pizza.cantidad > 0).map(pizza => (
                                        <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <img src={pizza.img} alt={pizza.nombre} style={{ width: '50px', marginRight: '10px' }} />
                                            <div>
                                                <h5>{pizza.nombre}</h5>
                                                <p>Precio: ${pizza.precio} x {pizza.cantidad}</p>
                                            </div>
                                            <div>
                                                <button className="btn btn-secondary" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                                                <button className="btn btn-secondary" onClick={() => increaseQuantity(pizza.id)}>+</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <h3>Total: ${formatNumber(total)}</h3>
                            <button className="btn btn-primary">Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
