import { EXITO_LISTA_PRODUCTO, FALLA_LISTA_PRODUCTO, SOLICITUD_LISTA_PRODUCTO } from "../constantes/constantesProductos";

export const reductorListaProducto = (state = { cargando: true, productos: [] }, action) =>
{
    switch(action.type)
    {
        case SOLICITUD_LISTA_PRODUCTO:
            return { cargando: true };
        case EXITO_LISTA_PRODUCTO:
            return { cargando: false, productos: action.payload };
        case FALLA_LISTA_PRODUCTO:
            return { cargando: false, error: action.payload }    
        default:
            return state;
    }
};