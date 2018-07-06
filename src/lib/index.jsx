import React from 'react';
import PropTypes from 'prop-types';
import IconsPaths from './icons';

const SvgFontIcons = ({
  name,
  sets,
  size,
  onClick,
  className,
  color,
}) => {
  const icon = IconsPaths[sets][name];
  const customClassName = !className ? 'svg__icon' : `svg__icon ${className}`;

  const props = {
    className: customClassName,
    onClick,
    width: size,
    height: size,
    viewBox: icon.view,
    fill: color,
  };

  if (!icon) {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d={icon.d} />
    </svg>
  );
};

SvgFontIcons.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  sets: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.string,
};

SvgFontIcons.defaultProps = {
  sets: 'fontAwesome',
  size: '1rem',
  color: 'red',
  className: null,
  onClick: null,
};

export default SvgFontIcons;
