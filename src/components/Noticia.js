import React from 'react'
import {  Card, Button } from 'react-bootstrap';


const Noticia = (articles) => {

    const { id, title, description, urlToImage, url } = articles.articles;

    return (

            <Card style={{ width: '18rem' }} key={id} value={id}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Button style={{width: '100%' }}target="_blank" href={url} variant="dark">Read More</Button>
            </Card>
    );
}

export default Noticia;

