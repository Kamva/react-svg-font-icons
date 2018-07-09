import React from 'react';
import { render } from 'react-dom';
import SvgFontIcons from '../../lib';
import fontAwesomeIcons from '../../lib/icons/fontAwesome';
import TdKeys from './TdKeys';
import './style.css';

const RowRender = ({ keys }) => (
  keys.map((key, id) => (
    <tr key={id}>
      <TdKeys value={key} />
      <td><SvgFontIcons name={key} sets="fontAwesome" fill="#ccc" size="2.5rem" /></td>
      <td><SvgFontIcons name={key} sets="simpleLineIcon" fill="#ccc" size="2.5rem" /></td>
    </tr>
  ))
);

function Demo() {
  const keys = Object.keys(fontAwesomeIcons);
  return (
    <div>
      <section className="table-container">
        <h1>Demo with examples of the SvgFontIcons</h1>
        <p>Just click on the keys</p>
        <table className="table100 ver3">
        <thead>
          <tr>
            <th>Keys</th>
            <th>fontAwesome</th>
            <th>line icons</th>
          </tr>
        </thead>
          <tbody>
            <RowRender keys={keys} />
          </tbody>
        </table>
      </section>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
