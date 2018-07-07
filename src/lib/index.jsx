import React from 'react';
import PropTypes from 'prop-types';
import IconsPaths from './icons';

const SvgFontIcons = (props) => {
  const {
    name,
    size,
    className,
    sets,
  } = props;

  const icon = IconsPaths[sets][name];
  const customClassName = !className ? 'svg__icon' : `svg__icon ${className}`;

  if (!icon) {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={size}
      height={size}
      className={customClassName}
      viewBox={icon.view}
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
  className: PropTypes.string,
  fill: PropTypes.string,
};

SvgFontIcons.defaultProps = {
  sets: 'fontAwesome',
  size: '1rem',
  fill: '#03A9F4',
  className: null,
};

export default SvgFontIcons;
