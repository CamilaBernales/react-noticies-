import React, { useEffect, useState } from 'react'
import { Form, Container } from 'react-bootstrap';
import { Redirect } from "react-router";

const Formulario = () => {



    const [pais, setPais] = useState('ar');
    const [categorias, setCategorias] = useState('general');

    useEffect(() => {
        console.log(categorias);


    }, [categorias])

    const seleccionarCategoria = e => {
        setCategorias(e.target.value)
    }

    const seleccionarPais = e =>{
        setPais(e.target.value);
    }

    

    return (

        <Container>
            <>
                {(categorias || pais) ?  <Redirect to={`/listanoticias/${categorias ? categorias : " "}/${pais ? pais: " "}`} /> : null}
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Categorias</Form.Label>
                        <Form.Control as="select" onChange={seleccionarCategoria} value={categorias}>
                            <option>general</option>
                            <option>business</option>
                            <option>entertainment</option>
                            <option>health</option>
                            <option>science</option>
                            <option>sports</option>
                            <option>technology</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Paises</Form.Label>
                        <Form.Control as="select"   onChange={seleccionarPais} value={pais} >
                            <option value='ar'>Argentina</option>
                            <option value='us'>USA</option>
                            <option value='br'>Brasil</option>
                            <option value='bg'>Belgica</option>
                            <option value='mx'>Mexico</option>
                            <option value='eg'>Egipto</option>
                            <option value="">Todos</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>

        </Container>
    );
}

export default Formulario;