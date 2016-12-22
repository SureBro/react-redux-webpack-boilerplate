import React, { PropTypes } from 'react';

require('./style.scss');

const Header1 = ({ text, className }) => (
  <h1 className={`${className || ''}`}>{text}</h1>
);
export default Header1;

Header1.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
