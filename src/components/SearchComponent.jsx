import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchComponent = (props) => {

  const handleClick = (evt) => {
    evt.preventDefault();
  }
  
  return (
    <div>
      <Form>
        <Row>
          <Col md={10}>
            <FormGroup>
              <Label for="search">Search your interests</Label>
              <Input type="text" name="search" id="search" className="Input" />
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