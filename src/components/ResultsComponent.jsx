import React from 'react';
import { Row } from 'reactstrap';
import ResultItemComponent from "./ResultItemComponent";

import { connect } from 'react-redux';

const ResultsComponent = (props) => {
  const data       = props && props.elements.data,
        pagination = props && props.elements.pagination;

  const handleItems = (data, pagination) => {
    let result  = false,
        message = 'No results';
    if(data && data.length > 1){
      result = data.map(item => {  
          const title = item && item.title,
                url   = item && item.images.downsized.url,
                key   = item && item.id;
  
          return <ResultItemComponent title={title} link={url} key={key} />;
        })
      
    }else{
      return <ResultItemComponent title={false} link={false} message={message} key="0"/>;
    }

    return result;
  }
  

  return (
    <div className="items-context">
      <Row className="items-box">
        {handleItems(data, pagination)}
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({elements: state.results});

export default connect(
  mapStateToProps, 
  {}
)(ResultsComponent);