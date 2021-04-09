import axios from "axios";
import { EXITO_LISTA_PRODUCTO, FALLA_LISTA_PRODUCTO, SOLICITUD_LISTA_PRODUCTO } from "../constantes/constantesProductos"

export const listaProductos = () => async (dispatch) =>
{
    dispatch
    (
        {
            type: SOLICITUD_LISTA_PRODUCTO
        }
    );
    try
    {
        const { dato } = await axios.get('/api/productos');
        dispatch({type: EXITO_LISTA_PRODUCTO, payload: dato});
    }
    catch(error)
    {
        dispatch({type: FALLA_LISTA_PRODUCTO, payload: error.message});
    }
}