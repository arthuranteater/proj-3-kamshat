import React, { useState} from "react";
import { Container, FormGroup, Label, Button, Input, Col } from "reactstrap";
import API from "../../utils/API";
import countriesList from "../../data/countries.json";
import continentsList from "../../data/continents.json";
import CityCard from "../Card/index";

const CityForm = () => {
  const [data, setData] = useState({
    continentsList,
    countriesList
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [userInput, setUserInput] = useState({
    city: "",
    continent: "",
    country: "",
    activities: [],
    restaurant: [],
    events: [],
    image: "" 
  })

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
    
  };


  function handleFormSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true)
    API.saveCityCard({
      city: userInput.city,
      continent: userInput.continent,
      country: userInput.activities,
      activities: userInput.activities,
      restaurant:userInput.restaurant,
      events: userInput.events,
      image: userInput.image
    });
  }

  return (
    <Container>
      <Col>
        <form>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="text"
              id="city"
              onChange={handleInputChange}
              name="city"
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Continent</Label>
            <select onChange={handleInputChange} name="continent">
            {data.continentsList.map(c => (
              <option key={c.value}>
                {c.value}
              </option>
            ))}
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="city">Country</Label>
            <select onChange={handleInputChange} name="country">
            {data.countriesList.map(country => (
              <option key={country.name}>
                {country.name}
              </option>
            ))}
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="restaurant">Restaurants</Label>
            <Input
              type="text"
              id="restaurant"
              onChange={handleInputChange}
              name="restaurant"
            />
          </FormGroup>
          <FormGroup>
            <Label for="activity">Activities</Label>
            <Input
              type="text"
              id="activity"
              onChange={handleInputChange}
              name="activities"
            />
          </FormGroup>
          <FormGroup>
            <Label for="event">Events</Label>
            <Input
              type="text"
              id="event"
              onChange={handleInputChange}
              name="events"
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              type="text"
              id="image"
              onChange={handleInputChange}
              name="image"
            />
          </FormGroup>
          <Button onClick={handleFormSubmit}>Submit</Button>
        </form>
        {isSubmitted  &&
        <CityCard
        key={userInput.city}
        city={userInput.city}
        country={userInput.country}
        continent={userInput.continent}
        restaurant={userInput.restaurant}
        activities={userInput.activities}
        events={userInput.events}
        image={userInput.image}
        />}
      </Col>
    </Container>
    
  );
};

export default CityForm;
