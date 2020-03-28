import React, { useState, useEffect } from 'react'
import { Container,  CardColumns } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Noticia from './Noticia'

const ListaNoticias = () => {


    let { categoria, pais } = useParams();
    const [articles, setarticles] = useState([]);

    console.log(categoria, pais);

    const llamarAPi = async () => {
        const solicitud = await fetch(`http://newsapi.org/v2/top-headlines?category=${categoria}&country=${pais}&apiKey=f28371d589e740b2a1ef4dd1c8a0132d`);
        const respuesta = await solicitud.json();
        console.log(respuesta.articles);
        setarticles(respuesta.articles);
    }



    useEffect(() => {
        llamarAPi();
    }, [categoria, pais]);



    return (
        <Container>
            <CardColumns>
                {
                    articles.map((articles) =>
                        <Noticia
                            articles={articles} />
                    )
                }
            </CardColumns>
        </Container>
    );
}

export default ListaNoticias;