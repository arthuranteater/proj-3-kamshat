import React, {useState} from "react";
import { Container, Input, FormGroup, Label, Button } from "reactstrap";

const CityForm = () => {
  const [formObject, setFormObject] = useState({});

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleSave = e => {
      console.log(e.target)
  }
  
  return (
    <Container>
      <form>
        <FormGroup>
          <Label for="city"></Label>
          <Input type="text" id="city" onChange={handleInputChange} name="city" />
        </FormGroup>
        <FormGroup>
          <Label for ="food"></Label>
          <Input  type="text" id="food" onChange={handleInputChange} name="food" />
        </FormGroup>
        <FormGroup>
          <Label for="restaurant"></Label>
          <Input type="text" id="restaurant" onChange={handleInputChange} name="restaurant" />
        </FormGroup>
        <FormGroup>
          <Label for="event"></Label>
          <Input type="text" id="event" onChange={handleInputChange} name="event" />
        </FormGroup>
        <Button
            onClick={handleSave}>
            Save
        </Button>
      </form>
    </Container>
  );
};

export default CityForm;
