import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
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
    return (
      <div>
        <HeaderComponent/>
        <Container>
          <Row>
            <Link to="/">{"<"}</Link>
          </Row>
          <Row>
            <DetailComponent item={this.props.selected}/>
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