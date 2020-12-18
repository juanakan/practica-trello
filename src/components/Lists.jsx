import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FormCard from './FormCard';
import './Lists.css';

function Lists (props) {
    const items = props.items;
    const listItems = items.map(item=>{
        return <div className="list" key={item.key}>
                <div className="tituloLista">
                <h3>{item.text}</h3>
                <FontAwesomeIcon className="faicons" onClick={() => {
                props.deleteItem(item.key)
                }} icon="trash" />
                </div>
                <FormCard/>
                </div>})

    return(
        <div className="container">{listItems}</div>
    )
    
}
export default Lists;