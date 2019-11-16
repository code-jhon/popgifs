import React, {useState} from 'react';
import { connect } from 'react-redux';
import { getSearch, helloWorld } from './lib/actions';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchComponent = (props) => {

  const [searchInput, setSearchInput] = useState('');

  const handleClick = (evt) => {
    evt.preventDefault();
    props.getSearch(searchInput)
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

const mapStateToProps = state => ({results:state.results}); /** Adapter state - component */

/** HOC, curry pattern to extend redux states into component */
export default connect(
  mapStateToProps,
  { getSearch, helloWorld }
)(SearchComponent); 