# klox-components

> This is an internal library of react component.

[![NPM](https://img.shields.io/npm/v/klox-components.svg)](https://www.npmjs.com/package/klox-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save klox-components
```

## Commands 
- <strong>Run in local on port 6006</strong>  
```npm run storybook```
  
- <strong>Build package</strong>  
```npm run build```
  
- <strong>Build storybook</strong>  
```npm run build-storybook```

## Publish
  
In order to publish an updated version of <strong>klox-components</strong> package, run ```npm run build```.  
After the build is complete, add a new <em>version</em> number in <em>package.json</em> then run ```npm publish```.  

## Usage

```jsx
import React, { Component } from "react";

import MyComponent from "klox-components";

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## License

MIT © [Klox-team](https://github.com/Klox-team)
