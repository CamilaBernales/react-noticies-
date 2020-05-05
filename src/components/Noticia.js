import React from 'react'
import {  Card, Button } from 'react-bootstrap';


const Noticia = ({articles}) => {

    const {title, description, urlToImage, url } = articles;

    return (
        <div className="col s12 m8 offset-m2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Button style={{width: '100%' }}target="_blank" href={url} variant="dark">Read More</Button>
            </Card>
            </div>
    );
}

export default Noticia;

