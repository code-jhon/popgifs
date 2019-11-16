// import React from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

const DetailComponent = (props) => {
  return (
    <div>

    </div>
  )
}

const mapStateToProps = state => ({element: state.selected});
export default connect(
  mapStateToProps, 
  {}
)(DetailComponent);