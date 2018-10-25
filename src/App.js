import React, { Component } from 'react';

import Aux from '../src/hoc/AuxComponent/AuxComponent';
import MainContainer from '../src/containers/MainContainer';
import Header from '../src/component/UI/Header/Header';

class App extends Component {
    render() {
        return (
            <Aux>
                <Header></Header>
                <MainContainer></MainContainer>
            </Aux>
        );
    }
}

export default App;