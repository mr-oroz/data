import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Header from "../header/header";
import People from "../people/people";
import PeopleDetail from "../people-detail/people-detail";
import {Container} from "react-bootstrap";
import {getPeople} from "../../action";
import {connect} from "react-redux";

class App extends Component {
    componentDidMount() {
        this.props.getPeople()
    }

    render() {
        const {data, loading} = this.props
        if (loading) {
            return <p>loading</p>
        }

        return (
            <Container>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path={"/people"}>
                            <People data={data}/>
                        </Route>
                        <Route exact path="/people/:id">
                            <PeopleDetail data={data}/>
                        </Route>
                    </Switch>
                </Router>
            </Container>
        );
    }
}

const mapStateToProps = ({data, loading}) => {
    return {data, loading}
}

const mapActionsToProps = (dispatch) => {
    return {
        getPeople: getPeople(dispatch),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(App);