import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import LeftPanel from '../../component/LeftPanel/LeftPanel';
import CenterPanel from '../../component/CenterPanel/CenterPanel';
import RightPanel from '../../component/RightPanel/RightPanel';
import classes from './MainContainer.css';

class MainContainer extends Component {
    render() {
        return (
            <Container className={classes.MainContainer} fluid={true}>
                <Row>
                    <Col xs="3">
                        <LeftPanel></LeftPanel>
                    </Col>
                    <Col xs="6">
                        <CenterPanel></CenterPanel>
                    </Col>
                    <Col xs="3">
                    <RightPanel></RightPanel>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainContainer;