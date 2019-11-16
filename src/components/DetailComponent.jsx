import React from 'react';
import GifPlayer from 'react-gif-player'
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

const DetailComponent = (props) => {
  console.log(props.item)
  const item   = props && props.item,
        // source = item && item.images.original.url,
        source = item && item.images,
        images = source && source.original,
        url    = images && images.url;

  return (
    <div>
      {url && <GifPlayer gif={url} still={url} />}
    </div>
  )
}

const mapStateToProps = state => ({element: state.selected});
export default connect(
  mapStateToProps, 
  {}
)(DetailComponent);