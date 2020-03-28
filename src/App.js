import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Navbar } from 'react-bootstrap';
import imagen1 from './imagen1.png'
import './App.css'



function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark">
          <Navbar.Brand href="#home">
            <img
              src={imagen1}
              width="100"
              height="35"
              className=" rounded-circle d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
        <Header />
        <Formulario />
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
