import React, { useEffect, useState } from 'react';
import Producto from '../componentes/Producto';
import axios from 'axios';
import CajaCarga from '../componentes/CajaCarga';
import CajaMensaje from '../componentes/CajaMensaje';
import { useDispatch, useSelector } from 'react-redux';
import { listaProductos } from '../acciones/accionesProducto';


export default function PantallaInicio()
{   
    const dispatch = useDispatch(); 
    const listaProducto = useSelector( state => state.listaProducto);
    const { cargando, error, productos } = listaProducto;

    useEffect(() =>
    {
        dispatch(listaProductos());
    }, [dispatch]);
    return(
        <div>
            {cargando ? ( <CajaCarga></CajaCarga>)
            :
            error ? (<CajaMensaje variant="danger">{error}</CajaMensaje>)
            : (
            <div className="row center">
            {productos.map((producto => 
                <Producto key={producto.id} producto={producto}></Producto>
                ))
            }
            </div>
            )}            
        </div>
    );
}