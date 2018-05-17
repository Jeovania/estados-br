# Estados BR

> Lista de estados brasileiros

[![NPM](https://img.shields.io/npm/v/react-circular-loading.svg)](https://www.npmjs.com/package/react-circular-loading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i --save estados-br
```

## Usage

```jsx
import { estados, estadosPorId, estadoPorSigla } from 'estados-br'

//..
console.log(estados); // Objeto com todos os estados brasileros
console.log(estadoPorId(22)); // { _id: '22', nome: 'Roraima', sigla: 'RR', sigla_slug: 'rr', slug: 'roraima' }
console.log(estadoPorSigla('RR')); // { _id: '22', nome: 'Roraima', sigla: 'RR', sigla_slug: 'rr', slug: 'roraima' }
//..
```
