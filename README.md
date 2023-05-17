# coditas-portfolio

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/coditas-portfolio.svg)](https://www.npmjs.com/package/coditas-portfolio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save coditas-portfolio
```

## Usage

```tsx
import React, { Component } from 'react'

import { Portfolio } from "coditas-portfolio";
import "coditas-portfolio/dist/index.scss";

class Example extends Component {
  render() {
    return <Portfolio 
        env={THE_ENV_TO_FETCH_DATA} 
        onClickCard={(id: string) => {}} 
        onClickFeatured={(id: string) => {}} 
    />
  }
}
```

## License

MIT © [](https://github.com/)
