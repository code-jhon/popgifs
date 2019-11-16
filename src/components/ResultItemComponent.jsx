import React from 'react';
import { Col } from 'reactstrap';

const ResultItemComponent = (props) => {
  const title   = props && props.title,
        source  = props && props.link,
        message = props && props.message;

  let   item    = null;

  if(message){
    item = <h1>{message}</h1>
  }else{
    item = <Col>
              <div >
                <img className="result-item sepia" src={source} />
                <div className="item-title">
                  {title}
                </div>
              </div>
            </Col>
  }

  return item;
}

export default ResultItemComponent;