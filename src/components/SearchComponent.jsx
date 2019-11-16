import React, {useState} from 'react';
import {search} from "./lib/giphy";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchComponent = () => {

  const [searchInput, setSearchInput] = useState('');

  const handleClick = (evt) => {
    evt.preventDefault();
    search(searchInput)
  };

  const handleChange = (evt) => {
    setSearchInput(evt.target.value);
  }
  
  return (
    <div>
      <Form>
        <Row>
          <Col md={10}>
            <FormGroup>
              <Label for="search">Search your interests</Label>
              <Input type="text" name="search" id="search" value={searchInput} onChange={handleChange} className="Input" />
            </FormGroup>
          </Col>
          <Col md={2} className="search-box">
            <FormGroup>
              <Button onClick={handleClick} className="search-button">Search</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchComponent;