import React from 'react';
import Header from './Header';
import Cardpizza from './Cardpizza';
import { productos } from '../utils/pizzas';
function Home() {
    const mapeoProductos = productos.map((producto) => (
        <div key={producto.id} className='col'>
            <Cardpizza producto={producto} />
        </div>


    ));
    
    return (
        <div>
            <Header />
            <div className='container '>
                <div className='row g-4 p-3'>
                    {mapeoProductos}
                </div>

            </div>

        </div>
    );
}

    export default Home;
