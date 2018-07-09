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
    <SvgFontIcons sets="simpleLineIcon" name="trash" color="#333" /> 
  );
```
If you want use default sets in entire project:

```jsx
import React from 'react';
import { AwesomeSvg, SimpleLineSvg } from 'react-svg-font-icons';
const IconA () => (
  <AwesomeSvg name="trash" />
);

const IconB = () => (
  <SimpleLineSvg name="trash" />
);
```


## Props
| prop key        | default props  |   describe  |
| ------------- |:-------------:|:-------------:|
| sets     | fontAwesome |  icons set |
| name     | *none* | icon name |
| size      | 1rem   | size set svg width and height value|
| fill |  none  | icon color if you want change svg color with css, prevent to change this prop |
| className |  *none*  | custom class name |

## License
MIT © [RE7A](https://reza.blue)