import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class PeopleDetail extends Component {
    render() {
        const id = +this.props.match.params.id
        const item = this.props.data.find((item) => item.id === id)
        return (
            <div className='container'>
                <ListGroup.Item>name: {item.name}</ListGroup.Item>
                <ListGroup.Item>height: {item.height}</ListGroup.Item>
                <ListGroup.Item>mass: {item.mass}</ListGroup.Item>
                <ListGroup.Item>hair_color: {item.hair_color}</ListGroup.Item>
                <ListGroup.Item>gender: {item.gender}</ListGroup.Item>
            </div>
        );
    }
}


export default withRouter(connect(({data})=>({data}))(PeopleDetail));