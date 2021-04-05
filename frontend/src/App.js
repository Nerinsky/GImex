import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import PantallaInicio from './pantallas/PantallaInicio';
import PantallaProductos from './pantallas/PantallaProductos';


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="logo" href="/">GIMEX</a>
            </div>
            <div>
                <a href="/carrito">Carrito</a>
                <a href="/registrarse">Registrarse</a>
            </div>
        </header>
        <main>
          <Route path="/producto/:id" component={PantallaProductos}></Route>
          <Route path="/" component={PantallaInicio} exact></Route>
        </main>
        <footer className="row center">ITGAM-GIMEX Neri Todos los Derechos Reservados</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
