import React from 'react';
import { Link } from 'react-router-dom';
import Clasificacion from '../componentes/Clasificacion';
import dato from '../dato';

export default function PantallaProductos(accesorios)
{
    const producto = dato.productos.find(x => x.id === accesorios.match.params.id);
    if (!producto)
    {
        return<div>Producto no encontrado</div>;
    }
    return(
        <div>
            <Link to="/">Volver Resultado</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={producto.imagen} alt={producto.nombre}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{producto.nombre}</h1>
                        </li>
                        <li>
                            <Clasificacion
                                clasificacion={producto.clasificacion}
                                visitas={producto.visitas}
                                ></Clasificacion>
                        </li>
                        <li>
                            Precio : ${producto.precio}
                        </li>
                        <li>
                            Categoria:
                            <p>{producto.categoria}</p> 
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="tarjeta tarjeta-cuerpo">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Precio</div>
                                    <div className="precio">${producto.precio}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Estado</div>
                                    <div>
                                        {producto.existencia > 0 ? ( <span className="éxito">En existencia</span>) : (
                                        <span className="error">No Disponible</span>
                                    )
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="bloque primario">Agregar al Carrito</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>  
    )
}