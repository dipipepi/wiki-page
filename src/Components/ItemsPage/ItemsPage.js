import React from "react";
import itemsFromServer from "../../Service/test-service";
import Item from "../Item/Item";

export default class ItemsPage extends React.Component{
    render() {
        const items = itemsFromServer['persons'].map((item) => {
            return <Item key={item.id} title={item.title} text={item.text} image={item.image} id={item.id}/>
        });
        return (
            <div className='items'>
                {items}
            </div>
        );
    }
}