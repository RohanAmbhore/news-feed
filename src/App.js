import React, { Component } from 'react';

import Aux from '../src/hoc/AuxComponent/AuxComponent';
import MainContainer from './containers/MainContainer/MainContainer';
import Header from '../src/component/Header/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <MainContainer></MainContainer>
            </div>
        );
    }
}

export default App;