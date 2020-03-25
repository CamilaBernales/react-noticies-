import React from 'react'
import {  Card, Button, Col } from 'react-bootstrap';


const Noticia = (articles) => {

    const { id, title, description, urlToImage, url } = articles.articles;

    return (



        <Col>
            <Card style={{ width: '18rem' }} key={id} value={id}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Button href={url} variant="primary">Ver Noticia Completa</Button>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>

            </Card>
        </Col>

    );
}

export default Noticia;

