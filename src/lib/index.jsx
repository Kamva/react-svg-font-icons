import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SvgFontIcons extends Component {
  constructor() {
    super();

    this.state = {
      IconsPaths: null,
    };
  }

  UNSAFE_componentWillMount() {
    const { sets } = this.props;

    import(`./icons/${sets}`)
      .then((blob) => {
        this.setState({
          IconsPaths: blob.default,
        });
      });
  }

  render() {
    const {
      name,
      size,
      className,
    } = this.props;

    const icon = this.state.IconsPaths && this.state.IconsPaths[name];
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
      {...this.props}
      >
        <path d={icon.d} />
      </svg>
    );
  }
}

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
