import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import LeftPanel from '../component/LeftPanel/LeftPanel';
import CenterPanel from '../component/CenterPanel/CenterPanel';
import RightPanel from '../component/RightPanel/RightPanel';

class MainContainer extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col xs="4">
                        <LeftPanel></LeftPanel>
                    </Col>
                    <Col xs="4">
                        <CenterPanel></CenterPanel>
                    </Col>
                    <Col xs="4">
                    <RightPanel></RightPanel>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainContainer;