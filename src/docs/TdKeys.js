import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class TdKeys extends Component {
  state = {
    copied: false,
    setClassName: false,
  };

  render() {
    const { value } = this.props;
    return (
      <Fragment>
      <CopyToClipboard text={value}
        onCopy={(text, result) => {
          if (result) {
            this.setState({
              copied: true,
              setClassName: true,
            }, () => {
              setTimeout(() => {
                this.setState({
                  setClassName: false,
                });
              }, 1000);
            });
          }
        }}>
        <td className={`td-keys ${this.state.setClassName ? 'coppied' : ''}`}>
          {value}
          {' '}
          {this.state.setClassName && <span style={{ color: '#fff', fontSize: '0.7rem' }}>coppied!</span>}
        </td>
      </CopyToClipboard>
      </Fragment>
    );
  }
}

TdKeys.propTypes = {
  value: PropTypes.string,
};

export default TdKeys;
