import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DisplayAll = (props) => {
    // console.log(props.countryData);
    const {name, flag, region, subregion} = props.countryData;

    return (
        <div className="container">
            <Card>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>Region : {region}</p>
                    <p>Subregion : {subregion}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to="/home">
                        <small className="text-muted">Click for More Details</small>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default DisplayAll;