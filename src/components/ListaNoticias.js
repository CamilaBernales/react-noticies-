import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Noticia from './Noticia'

const ListaNoticias = () => {


    let { categoria, pais } = useParams();
    const [articles, setarticles] = useState([]);


    const key = 'f28371d589e740b2a1ef4dd1c8a0132d'; 
    const llamarAPi = async () => {
        const solicitud = await fetch(`http://newsapi.org/v2/top-headlines?category=${categoria}&country=${pais}&apiKey=${key}`);
        const respuesta = await solicitud.json();
        setarticles(respuesta.articles);
    }



    useEffect(() => {
        llamarAPi();
    // eslint-disable-next-line
    }, [categoria, pais]);



    return (
        <Container>
            <div className="row">
                {
                    articles.map((articles) =>
                        <Noticia
                        key={articles.url}
                        articles={articles} />
                    )
                }
            </div>
        </Container>
    );
}

export default ListaNoticias;