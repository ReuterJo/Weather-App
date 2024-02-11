import React, { Fragment, useState, useEffect } from "react";

import { loadUser } from "../routing/routes";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import { Row, Col } from "reactstrap";
import City from "../components/City"

export const DashboardComponent = () => {
    
    const { user } = useAuth0();
    const [cities, setCities] = useState([]);

    const user_id = user.sub.substring(user.sub.indexOf("|")+1);

    useEffect(() => {
        loadUser(user_id, setCities);
      }, [user_id, setCities]);

    return (
        <Fragment>
        {cities.length === 0 && (
            <div className="next-steps my-5">
                <h2 className="my-5 text-center">Add Cities</h2>
            </div>
        )}
        {cities.length !== 0 && (
            <div className="next-steps my-5">
                <h2 className="my-5 text-center">Your Cities</h2>
                <Row className="d-flex justify-content-between">
                    {cities.map((col, i) => (
                        <Col key={i} md={6} className="mb-4">
                            <City 
                                city_id={col}
                                user_id={user_id}
                                setCities={setCities}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        )}
        <div>
            <p>Add button goes here</p>
        </div>
        </Fragment>
    );
};

export default withAuthenticationRequired(DashboardComponent, {
    onRedirecting: () => <Loading />,
});