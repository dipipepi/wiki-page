import React from "react";
import itemsFromServer from "../../Service/test-service";

export default class ItemDetails extends React.Component{
    render() {
        const {title, text, image} = itemsFromServer['persons'][this.props.match.params.id - 1];
        console.log(this.props);
        return(
            <div className="item-details">
                <h1>{title}</h1>
                <div>
                    <div className='image'>
                        <img src={image} alt=""/>
                    </div>
                    <div className='text'>
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}