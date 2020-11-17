import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {ListGroup} from "react-bootstrap";


class PeopleDetail extends Component {
    render() {
        const id = +(this.props.match.params.id)
        console.log(id)
        const {name, height, mass, hair_color, gender} = this.props.data[id]
        return (
            <div className='container'>
                <ListGroup className="col-3 col-md-4 col-sm-6 items">
                    <ListGroup.Item>name: {name}</ListGroup.Item>
                    <ListGroup.Item>height: {height}</ListGroup.Item>
                    <ListGroup.Item>mass: {mass}</ListGroup.Item>
                    <ListGroup.Item>hair_color: {hair_color}</ListGroup.Item>
                    <ListGroup.Item>gender: {gender}</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}


export default withRouter(PeopleDetail);