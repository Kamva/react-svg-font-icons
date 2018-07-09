## React Svg Font Icons

![NPM Version](https://img.shields.io/npm/v/react-final-form.svg?style=flat)
![NPM Downloads](https://img.shields.io/npm/dm/react-final-form.svg?style=flat)

A React component that makes easy to use popular font icon sets as an SVG element.

Icon sets that supported:
- font awesome v4
- simple line icons

## Installation
$ npm install --save-dev react-svg-font-icons

## Getting Started
React-svg-font-icons use same icon names in different icon sets. You can see and copy these in [here](https://rzkhosroshahi.github.io/react-svg-font-icons/)

example:
```jsx
import React from 'react';
import SvgFontIcons from 'react-svg-font-icons';

  const FontAwesomeIcon = () => (
    <SvgFontIcons sets="fontAwesome" name="trash" color="#333" />
  );

  const SimpleLineIcons = () => (
    <SvgFontIcons sets="lineIcon" name="trash" color="#333" /> 
  )
```

### todo
- how to use hoc and change default icon sets