import React, {Component} from 'react';
import Item from "./item/index";
import {getPeople} from "../../action";
import {Row} from "react-bootstrap";
import {connect} from "react-redux";



class People extends Component {
    componentDidMount() {
        this.props.getPeople()
    }

    render() {
        return (
            <div className="mt-3">
                <h1 className='text-center'>People</h1>
                <Row>
                    {this.props.data.map((item, index) => <Item key={index} {...item}/>)}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = ({data}) => {
    return {data}
}

const mapActionsToProps = (dispatch) => {
    return {
        getPeople:getPeople(dispatch),

    }
}

export default connect(mapStateToProps,mapActionsToProps )(People);