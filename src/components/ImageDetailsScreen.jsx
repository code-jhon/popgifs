import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeaderComponent from "./HeaderComponent";
import SearchComponent from './SearchComponent';
import ResultsComponent from './ResultsComponent';
import './ImageApp.css';

class ImageDetailsScreen extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <Container>
          <Row>
            Detail
          </Row>
        </Container>
      </div>
    );
  }
}

export default ImageDetailsScreen;