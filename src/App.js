import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Formulario/>
        <div className="container mt-5">
          <Switch>
            <Route exact path="/listanoticias/:categoria/:pais" component={ListaNoticias} />
          </Switch>
        </div>
      </div>

    </Router>
  );
}


export default App;
