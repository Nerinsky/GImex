import React, { useEffect, useState } from 'react';
import Producto from '../componentes/Producto';
import axios from 'axios';
import CajaCarga from '../componentes/CajaCarga';
import CajaMensaje from '../componentes/CajaMensaje';


export default function PantallaInicio()
{
    const [productos, setProductos] = useState([]);
    const [cargando, setCarga] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() =>
    {
        const fecthData = async () =>
        {
            try
            {
                setCarga(true);
                const { dato } = await axios.get('/api/productos');
                setCarga(false);
                setProductos(dato);
            }
            catch(err)
            {
                setError(err.message);
                setCarga(false);
            }
            
        };
        fecthData();
    }, []);
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