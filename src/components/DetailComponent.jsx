import React from 'react';
import GifPlayer from 'react-gif-player'
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';
import Moment from 'react-moment';

import './ImageApp.css';

const DetailComponent = (props) => {
  console.log(props.item)
  const item            = props && props.item,
        source          = item && item.images,
        type            = item && item.type,
        import_datetime = item && item.import_datetime,
        urlExternal     = item && item.bitly_gif_url,   
        image           = source && source.original,
        image_size      = image && image.size,
        date            = new Date(),
        url             = image && `${image.url}?id=${date.getDate()}`,
        still           = image && image["480w_still"];

  return (
    <div className="reset-styles">
      <Row className="bigPic-container">
        <Col md="auto">
          {url && 
            <GifPlayer 
              className="gif-player"
              gif={url} 
              still={still}
            />
          }</Col>
      </Row>
      <Row className="details-container">
        <Col>
          <span className="detailLabel">Type</span><br/><span className="detailText">{type}</span>
        </Col>
        <Col>
        <span className="detailLabel">Created</span><br/><span className="detailText"><Moment fromNow={true}>{import_datetime}</Moment></span>
        </Col>
        <Col>
          <span className="detailLabel">Size</span><br/><span className="detailText">{((image_size/1024)/1024).toFixed(2)}MB</span>
        </Col>
        <Col>
          <span className="detailLabel">External source</span><br/><span className="detailText"><a rel="noopener noreferrer" target="_blank" href={urlExternal}>{urlExternal}</a></span>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({element: state.selected});
export default connect(
  mapStateToProps, 
  {}
)(DetailComponent);