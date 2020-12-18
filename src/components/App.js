import React from 'react';
import './App.css';
import Lists from './Lists.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
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
    console.log(newItem.text);
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
      <div className="App">
        <header>
          <h1 className="nombreApp">Practica Juan Antonio Roldan Paco</h1>
          <h1 className="nombreApp">Clon Trello</h1>
          <form className ="formularioLista" onSubmit={this.addItem}>
            <input type="text" placeholder="enter text"
            value={this.state.currentItem.text}
            onChange={this.handleInput} />
            <button type="submit">+ Añadir Lista</button>
          </form>
        </header>
            <Lists items = {this.state.items}
            deleteItem = {this.deleteItem}/>  
      </div>
 
  );
 }
}

export default App;
