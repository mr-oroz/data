import React, {Component} from 'react';
import Item from "./item/index";
import {Row} from "react-bootstrap";




class People extends Component {

    render() {
        return (
            <div className="mt-3">
                <h1 className='text-center'>People</h1>
                <Row>
                    {this.props.data.map((item, index) => <Item key={index} id={index} {...item}/>)}
                </Row>
            </div>
        );
    }
}

export default People;