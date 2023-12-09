import React from 'react';
import { Col, Row, TabPane } from 'reactstrap';

export default function AppTabPane({ tabId, children }) {
    return (
        <TabPane tabId={tabId}>
            <Row>
                <Col sm="12">
                    {children}
                </Col>
            </Row>
        </TabPane>
    )
}