import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Carousel} from 'react-bootstrap';


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
    </Carousel>


    <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://super.abril.com.br/wp-content/uploads/2017/03/preto-no-branco-a-explicac3a7c3a3o-cientc3adfica-para-as-cores-do-panda.png?w=1024"
                    alt="First slide"
                    />
                </Carousel.Item>
    </Carousel>

       <Rodape />
       </div>
    )

}

export default Home;
