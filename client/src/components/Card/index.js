import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";

const CityCard = ({
  city,
  country,
  continent,
  restaurant,
  events,
  activities,
  image
}) => {
  return (
    <Col>
      <Card>
        <CardHeader>{city}</CardHeader>
        <CardBody>
          <p>
            {country}, {continent}
          </p>
          <p>{restaurant}</p>
          <p>{events}</p>
          <p>{activities}</p>
          <img src={image} alt={city}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CityCard;
