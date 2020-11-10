import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../header/header";
import People from "../people/people";
import {Provider} from "react-redux";
import store from "../../store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header/>
                <People/>
            </Provider>
        );
    }
}

export default App;