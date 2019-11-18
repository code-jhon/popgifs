import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Label } from 'reactstrap';
import Slider from "react-slick";

import HeaderComponent from "./HeaderComponent";
import DetailComponent from "./DetailComponent";

import { connect } from 'react-redux';
import { getSearchId } from './lib/actions';

import './ImageApp.css';


class ImageDetailsScreen extends Component {

  componentDidMount = () =>{
    const params    = this.props && this.props.params.match.params,
          id        = params && params.id;
          id && this.props.getSearchId(id);
  }

  render(){ 
    const item = this.props.selected,
          image_title = item && item.title; 

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <HeaderComponent/>
        <Container>
          <Row>
            <Label><Link className="backLink" to="/">{`< ${image_title}`}</Link></Label>           
          </Row>
          <Row className="bigPic-container">
            <DetailComponent item={item}/>
          </Row>
          <Row className="seeMore-container">
            
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({selected: state.selected, params: ownProps});

export default connect(
  mapStateToProps, 
  {getSearchId}
)(ImageDetailsScreen);