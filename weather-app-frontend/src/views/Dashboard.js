import React, { Fragment, useState, useEffect } from "react";

import { loadUserProfile } from "../routing/routes";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import { Row, Col } from "reactstrap";
import City from "../components/City"

export const DashboardComponent = () => {
    
    const { user } = useAuth0();
    const [userProfile, setUserProfile] = useState({
        "id": null,
        "userId": null,
        "cities": []
    });

    const user_id = user.sub.substring(user.sub.indexOf("|")+1);

    useEffect(() => {
        loadUserProfile(user_id, setUserProfile);
      }, [user_id, setUserProfile]);

    return (
        <Fragment>
        {userProfile.cities.length === 0 && (
            <div className="next-steps my-5">
                <h2 className="my-5 text-center">Add Cities</h2>
            </div>
        )}
        {userProfile.cities.length !== 0 && (
            <div className="next-steps my-5">
                <h2 className="my-5 text-center">Your Cities</h2>
                <Row className="d-flex justify-content-between">
                    {userProfile.cities.map((col, i) => (
                        <Col key={i} md={6} className="mb-4">
                            <City 
                                city_id={col}
                                userProfile={userProfile}
                                setUserProfile={setUserProfile}
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