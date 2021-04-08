import React from 'react'

export default function CajaMensaje(accesorios)
{
    return(
        <div className={`alert alert-${accesorios.variant || 'informacion'}`}>
            {accesorios.adulto}
        </div>     
    )
}