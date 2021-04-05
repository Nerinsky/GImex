import React from 'react';
import Clasificacion from './Clasificacion';

export default function Producto(accesorios){
    const {producto} = accesorios;
    return(
        <div key={producto.id} className="tarjeta">
        <a href={`/producto/${producto.id}`}>
            <img className="medio" src={producto.imagen} alt={producto.nombre} />
        </a>
        <div className="tarjeta-cuerpo">
        <a href={`/producto/${producto.id}`}>
                <h2>{producto.nombre}</h2>
            </a>
            <Clasificacion clasificacion={producto.clasificacion} visitas={producto.visitas}></Clasificacion>
            <div className="precio">{producto.precio}</div>
        </div>
    </div>
    );
}
