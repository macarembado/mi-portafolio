import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./proyecto.css";
import imagenProyecto1 from '../../assets/pag1.png';
import jsimg from '../../assets/jsimg.jpeg'
import reactimg from '../../assets/reactimg.jpeg'
const lorem10 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

function Proyectos() {
    const proyectos = [
            {
            title: 'Proyecto realizado en Javascript',
            descripcion: 'En este caso en la cursada de javascript decidí hacer algo diferente a los demas y elegí hacer un login con un json como "base de datos" y cuando te registras eso se suma ahí',
            image: jsimg,
            pageLink: 'https://macarembado.github.io/JavaScript/',
            githubLink: 'https://github.com/macarembado/JavaScript',
        },
        {
            title: 'Proyecto Realizado en React ',
            descripcion: 'Durante la cursada de React aprendimos a como hacer un Ecommerce, a tener divido por categorias los productos , a manejar todo lo que el carrito conlleva, sumar y agregar productos, eliminar, pasar al pago.',
            image: reactimg,
            pageLink: 'https://react-47245.vercel.app/',
            githubLink: 'https://github.com/macarembado/React-47245',
        },
   
    ];

    return (
        <div id="proyectos" className="proyectos-section">
            <Container>
                <div className='proyectos-title'>
                    <h2>Mis Proyectos</h2>
                </div>
                <Row>
                    {proyectos.map((proyecto, index) => (
                        <Col key={index} lg={3} md={6} sm={12}>
                            <Card className="proyecto-card">
                                <Card.Img variant="top" src={proyecto.image} />
                                <Card.Body>
                                    <Card.Title>{proyecto.title}</Card.Title>
                                    <Card.Text>{proyecto.descripcion}</Card.Text>
                                    <Button variant="light" href={proyecto.pageLink} target="_blank" className="proyectos-button">
                                        Ver Proyecto
                                    </Button>
                                    <Button variant="light" href={proyecto.githubLink} target="_blank" className="proyectos-button">
                                        GitHub
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Proyectos;