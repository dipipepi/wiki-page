import React from "react";
import items from "../../Service/test-service";

export default class ItemPage extends React.Component{
    render() {
        // const itemsFromServer = items[]
        return (
            <h2>Hello person number {this.props.match.params.id}</h2>
        )
    }
}