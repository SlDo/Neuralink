import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { animated } from 'react-spring';

export function Title({ type, text, titleStyle }) {
  return React.createElement(animated[type], { className: 'title', ...titleStyle }, text);
}

Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  text: PropTypes.string.isRequired,
  titleStyle: PropTypes.objectOf(PropTypes.object),
};

Title.defaultProps = {
  titleStyle: null,
};
