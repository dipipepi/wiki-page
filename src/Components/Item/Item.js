import React from "react";
import { withRouter } from 'react-router-dom';
import './Item.css';

const Item = ({title, text, image, id, history}) => {
    const selectItem = () => {
        console.log('hello item', title, text, image, id, history);
        history.push(`/persons/${id}`);
    };
    return(
        <div className='item' onClick={selectItem}>
            <div className='image'>
                <img src={image} alt="item-image"/>
            </div>
            <div className='item-block'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
};

export default withRouter(Item);