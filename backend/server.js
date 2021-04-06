import express from 'express';
import dato from './dato.js';

const app = express();

app.get('/api/productos',(solicitud,respuesta) =>
{
    respuesta.send(dato.productos);
})

app.get('/',(solicitud,respuesta) => 
{
    respuesta.send('Servidor Preparado');
});
const port = process.env.PORT || 5000;
app.listen(port, () => 
{
    console.log(`Servidor en http://localhost:${port}`);
});