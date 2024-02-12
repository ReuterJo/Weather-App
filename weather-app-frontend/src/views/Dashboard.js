import React, { Fragment, useState, useEffect } from "react";

import { loadUserProfileAndCities, addCity } from "../routing/routes";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import { Row, Col, Form, FormGroup, Label, Button, InputGroup } from "reactstrap";
import City from "../components/City"
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
// Import as a module in your JS
import 'react-bootstrap-typeahead/css/Typeahead.css';

export const DashboardComponent = () => {
    
    const { user } = useAuth0();
    const [userProfile, setUserProfile] = useState({
        "id": null,
        "userId": null,
        "cities": []
    });
    const [selectedCity, setSelectedCity] = useState([]);
    const [cities, setCities] = useState([]);

    const user_id = user.sub.substring(user.sub.indexOf("|")+1);

    useEffect(() => {
        loadUserProfileAndCities(user_id, setUserProfile, setCities);
      }, [user_id, setUserProfile, setCities]);

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
                                setCities={setCities}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        )}
        <div className="next-steps my-5">
            <Form onSubmit={(e) => {
                e.preventDefault();
                addCity(selectedCity[0].id, userProfile, setUserProfile, setCities);
                setSelectedCity([]);
            }}>
                <FormGroup>
                    <Label>Add City</Label>
                    <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSelectedCity}
                    options={cities}
                    placeholder="Choose a city..."
                    selected={selectedCity}
                    />
                </FormGroup>
                <InputGroup>
                    <Button type="submit">
                        Submit
                    </Button>
                </InputGroup>
            </Form>
        </div>
        </Fragment>
    );
};

export default withAuthenticationRequired(DashboardComponent, {
    onRedirecting: () => <Loading />,
});