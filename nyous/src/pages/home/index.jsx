import React from '../cadastrar/node_modules/react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Carousel, Jumbotron, Button, Container, Row, Col, Card} from "../cadastrar/node_modules/react-bootstrap";


const Home = () => {

    return ( 
       <div> 
       <Menu />
            

    <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://veja.abril.com.br/wp-content/uploads/2016/08/imagens-do-dia-mundo-panda-completa-um-ano-kuala-lumpur-23082016-023.jpg?quality=70&strip=info&w=1024"
                    alt="First slide"
                    />
                </Carousel.Item>
  


    
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://super.abril.com.br/wp-content/uploads/2017/03/preto-no-branco-a-explicac3a7c3a3o-cientc3adfica-para-as-cores-do-panda.png?w=1024"
                    alt="First slide"
                    />
                </Carousel.Item>
    </Carousel>

    <Jumbotron className="text-center">
                <h1>Diversos eventos em um único local.</h1>
                <p>Encontre eventos nos mais diversos segmentos de forma rápida</p>
                <p><Button variant="primary" href="/login">Login</Button><Button variant="primary" href="/cadastrar" style={{marginLeft: "10px"}}>Cadastrar</Button></p>
    </Jumbotron>

        <Container>
            
        <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://mundodomarketing.com.br/images/editoriais/investimento-em-tecnologia.jpg" />
                            <Card.Body>
                                <Card.Title>Tecnologia</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://fluxoconsultoria.poli.ufrj.br/wp-content/uploads/2015/05/thinkstockphotos-896358708.jpg" />
                            <Card.Body>
                                <Card.Title>Inovação</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://d3q93wnyp4lkf8.cloudfront.net/revista/post_images/19580/2ae2c2aaa3c9b3912769332306c5a292f4817b1a.jpg?1559248176" />
                            <Card.Body>
                                <Card.Title>Educação</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

        </Container>



       <Rodape />
       </div>
    )

}

export default Home;
