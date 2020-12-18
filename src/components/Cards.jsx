import React from 'react';
import './Cards.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ListItems (props) {
    const items = props.items;
    const listItems = items.map(item=>{
        return <div className="card" key={item.key}>
            <p>{item.text}</p>
            <FontAwesomeIcon className="faiconsCard" onClick={() => {
            props.deleteItem(item.key)
            }} icon="trash" />
        </div>})

    return(
        <p>{listItems}</p>
    )
    
}
export default ListItems;