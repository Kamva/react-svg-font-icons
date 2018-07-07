import React from 'react';
import { render } from 'react-dom';
import SvgFontIcons from '../../lib';

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the SvgFontIcons</h1>
        <SvgFontIcons name="trash" fill="#039BE5" size="5rem" onClick={() => console.log('Hello SVG Icon! ')} />
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
