import Card from "react-bootstrap/Card";
import { Component } from 'react';
import Button from "react-bootstrap/Button";

class Product extends Component {
    constructor(props) {
        super(props);
    }
    state = { product:this.props.product,likes:this.props.product.like,Dislikes:this.props.product.Dislike }
    like=()=>{
      this.setState((oldState)=>({likes:oldState.likes + 1}))
    }
    Dislike=()=>{
      this.setState((oldState)=>({likes:oldState.likes - 1}))
    }
    //  state = { }
    render() { 
        return ( 
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={require("../assets/images/placeholder.jpg")} /> */}
        <Card.Img variant="top" src={require("../assets/images/"+this.state.product.img)} />

        <Card.Body>
          <Card.Title>{this.state.product.title}</Card.Title>
          <Card.Text>
          {this.state.product.description}
          </Card.Text>
          <Card.Text>
          price :{this.state.product.price}
          </Card.Text>
          <Card.Text>
          Quantite : {this.state.product.quantity}
          </Card.Text>
          <Card.Text>
          Likes :{this.state.likes}
          </Card.Text>
          <Button variant="primary" onClick={this.like}>Like</Button>
          <Button variant="primary" onClick={this.Dislike}>Dislike</Button>
          <Button variant="primary" onClick={ ()=> this.props.Buyfunction(this.state.product)} disabled={this.state.product.quantity<= 0}>Buy</Button>
        </Card.Body>
      </Card> );
    }
}
 
export default Product;
