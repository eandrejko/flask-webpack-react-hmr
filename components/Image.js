import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as fromImage from '../reducers/ui/image/api';
import * as uiSelectors from '../reducers/ui';

class Image extends Component {
  render() {
    const { isImageShown, toggleImage } = this.props;

    return (
      <div className="container">
        <div onClick={toggleImage}>Toggle image</div>
        {isImageShown && <p>image</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isImageShown: uiSelectors.getIsImageShown(state.ui),
});

const mapDispatchToProps = {
  toggleImage: fromImage.toggleImage,
};

const ImageConnected = connect(mapStateToProps, mapDispatchToProps)(Image);

export { ImageConnected as Image };
