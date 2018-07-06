import React from 'react';
import { render } from 'react-dom';
import SvgFontIcons from '../../lib';

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the SvgFontIcons</h1>
      <SvgFontIcons name="trash" color="#039BE5" size="5rem" />
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
