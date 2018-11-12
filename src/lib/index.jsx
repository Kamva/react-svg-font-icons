import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icons from '../icons';

class SvgFontIcons extends PureComponent {
  render() {
    const {
      name,
      size,
      className,
      sets,
    } = this.props;

    const icon = Icons[sets][name];
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
  className: null,
};

export const AwesomeSvg = props => <SvgFontIcons sets="fontAwesome" {...props} />;
export const SimpleLineSvg = props => <SvgFontIcons sets="simpleLineIcon" {...props} />;

export default SvgFontIcons;
