import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./proyecto.css";
import imagenProyecto1 from '../../assets/pag1.png';
const lorem10 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

function Proyectos() {
    const proyectos = [
        {
            title: 'Proyecto realizado en el curso de Desarrollo web',
            descripcion: 'Primer pagina web creada por mi, con muchos errores que con la practica y aprendiendo pude descubrir. es una pagina de dulces hecha con html y css, es responsive',
            image: imagenProyecto1,
            pageLink: 'https://macarembado.github.io/tete-39385/index.html',
            githubLink: 'https://github.com/macarembado/tete-39385',
        },
        {
            title: 'Proyecto realizado en Javascript',
            descripcion: 'En este caso en la cursada de javascrip decidi hacer algo diferente a los demas y quise hacer un login',
            image: imagenProyecto1,
            pageLink: 'https://macarembado.github.io/tete-39385/index.html',
            githubLink: 'https://github.com/macarembado/tete-39385',
        },
        {
            title: 'Proyecto Realizado en React ',
            descripcion: 'Durante la cursada de React aprendimos a como hacer un Ecommerce, a manejar todo lo que el carrito conlleva, sumar y agregar productos, eliminar, pasar al pago.',
            image: imagenProyecto1,
            pageLink: 'https://macarembado.github.io/tete-39385/index.html',
            githubLink: 'https://github.com/macarembado/tete-39385',
        },
        {
            title: 'Proyecto Propio',
            descripcion: lorem10,
            image: imagenProyecto1,
            pageLink: 'https://macarembado.github.io/tete-39385/index.html',
            githubLink: 'https://github.com/macarembado/tete-39385',
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