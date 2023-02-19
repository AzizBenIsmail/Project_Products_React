import Product from "./Product";
import { Component } from 'react';
import { Col, Container, Row,Alert } from "react-bootstrap";
import data from '../products.json'
class Products extends Component {
    constructor(props) {
        super(props);
    }
    state = { visible:false }
    buy=(product)=>{
        product.quantity=product.quantity-1
        this.setState({ visible:true})
        setTimeout(()=>{
        this.setState({visible:false})

        },2000)
    }
    render() { 
        return ( 
            <Container>
            <Row>
            {data.map( (element,index)=>
            <Col key={index} >
          

             
        <Product product={element} Buyfunction={this.buy} />
        </Col>
        ) }
        {this.state.visible &&

       
        <Alert style={{marginTop:"30px"}}  variant="primary" >
            <p>Alerte Buy </p>
        </Alert>
         }
        </Row>
        </Container> );
    }
}
 
export default Products;