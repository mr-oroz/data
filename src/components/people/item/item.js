import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";

class Item extends Component {
    render() {
        const {name, height, mass, hair_color, gender} = this.props
        return (
            <ListGroup className="col-3 col-md-4 col-sm-6">
                <ListGroup.Item>name: {name}</ListGroup.Item>
                <ListGroup.Item>height: {height}</ListGroup.Item>
                <ListGroup.Item>mass: {mass}</ListGroup.Item>
                <ListGroup.Item>hair_color: {hair_color}</ListGroup.Item>
                <ListGroup.Item>gender: {gender}</ListGroup.Item>
            </ListGroup>
        );
    }
}

export default Item;