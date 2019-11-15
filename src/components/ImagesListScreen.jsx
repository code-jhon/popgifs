import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeaderComponent from "./HeaderComponent";
import SearchComponent from './SearchComponent'
import './ImageApp.css';

class ImagesListScreen extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <Container>
          <Row>
            <Col><SearchComponent/></Col>          
          </Row>
        </Container>
      </div>
    );
  }
}

export default ImagesListScreen;