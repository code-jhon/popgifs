import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ResultItemComponent = (props) => {
  const title   = props && props.title,
        source  = props && props.link,
        id  = props && props.id,
        message = props && props.message;

  let   item    = null;

  if(message){
    item = <h1>{message}</h1>
  }else{
    item = <Col>
              <Link to={`/detail/${id}`}>
                <img className="result-item sepia" src={source} alt={title} />
                <div className="item-title">
                  {title}
                </div>
              </Link>
            </Col>
  }

  return item;
}

export default ResultItemComponent;