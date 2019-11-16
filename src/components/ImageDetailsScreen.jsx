import React, { Component } from 'react';
import { Container, Row, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

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
    return (
      <div>
        <HeaderComponent/>
        <Container>
          <Row>
            <Label><Link to="/">{`< ${image_title}`}</Link></Label>           
          </Row>
          <Row>
            <DetailComponent item={item}/>
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