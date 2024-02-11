import React, { Fragment } from "react";

import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import { Row, Col } from "reactstrap";
import City from "../components/City"

export const DashboardComponent = ({cities, setCities}) => {
    
    return (
        <Fragment>
        <div className="next-steps my-5">
            <h2 className="my-5 text-center">Your Cities</h2>
            <Row className="d-flex justify-content-between">
                {cities.map((col, i) => (
                    <Col key={i} md={6} className="mb-4">
                        <City city={col}/>
                    </Col>
                ))}
            </Row>
        </div>
        <div>
            <p>Add button goes here</p>
        </div>
        </Fragment>
    );
};

export default withAuthenticationRequired(DashboardComponent, {
    onRedirecting: () => <Loading />,
});