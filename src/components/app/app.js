import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Header from "../header/header";
import People from "../people/people";
import {Provider} from "react-redux";
import store from "../../store";
import PeopleDetail from "../people-detail/people-detail";
import {Container} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Container>
                        <Provider store={store}>
                            <Header/>
                            <People/>
                            <Route exact path="/people/">
                                <PeopleDetail/>
                            </Route>
                        </Provider>
                    </Container>
                </Switch>
            </Router>
        );
    }
}

export default App;