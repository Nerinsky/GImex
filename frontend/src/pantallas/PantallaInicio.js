import React from 'react';
import dato from '../dato';
import Producto from '../componentes/Producto';

export default function PantallaInicio()
{
    return(
        <div>
            <div className="row center">
            {
                dato.productos.map((producto) => (
                <Producto key={producto.id} producto={producto}></Producto>
                ))
            }
            </div>
        </div>
    );
}