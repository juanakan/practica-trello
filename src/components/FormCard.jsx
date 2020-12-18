import React from 'react';
import Cards from './Cards.jsx';
import './FormCard.css';

class FormCard extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:"",
      text:"",
      key:""
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!=="" && newItem.text!==undefined){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:"",
          key:""
        }
      })
    }
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items: filteredItems
    });
  }
  
  render(){
    return (
      <div className="tarjetas">
        <Cards items = {this.state.items}
        deleteItem = {this.deleteItem}/>
        <form className ="formularioTarjeta" onSubmit={this.addItem}>
          <input type="text" placeholder="enter text"
          value={this.state.currentItem.text}
          onChange={this.handleInput}/>
          <button type="submit">+ Añadir Tarjeta</button>
        </form>
      </div>
 
  );
 }
}

export default FormCard;