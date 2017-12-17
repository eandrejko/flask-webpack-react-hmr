import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as fromImage from '../reducers/ui/image/api';
import noIdea from '../../assets/images/dog/no-idea.jpg';

Image.propTypes = {
  isImageShown: PropTypes.bool.isRequired,
  toggleImage: PropTypes.func.isRequired,
};

const Image = ({ isImageShown, toggleImage }) => (
  <div className="container">
    <div onClick={toggleImage}>Toggle image</div>
    {isImageShown && <img src={noIdea} />}
  </div>
);

const mapStateToProps = state => ({
  isImageShown: fromImage.getIsImageShown(state),
});

const mapDispatchToProps = {
  toggleImage: fromImage.toggleImage,
};

const ImageConnected = connect(mapStateToProps, mapDispatchToProps)(Image);

export { ImageConnected as Image };
