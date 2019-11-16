import React from 'react';
import { Col } from 'reactstrap';

const ResultItemComponent = (props) => {
  const title  = props && props.title,
        source = props && props.link;

  return (
    <Col>
      <div >
        <img className="result-item sepia" src={source} />
        <div className="item-title">
          {title}
        </div>
      </div>
    </Col>
  )
}

export default ResultItemComponent;