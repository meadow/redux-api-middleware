# Redux API Middlware

`redux-api-middleware` provides a middleware function to use as part of the `redux` dispatch chain. It is intended for use with the Meadow API promise library to provide a middleware to dispatch actions for `REQUEST`, `SUCCESS`, and `FAILURE`.

## Installation

`npm install @meadow/redux-api-middleware`

## Usage

```
import apiMiddleware from '@meadow/redux-api-middleware';
import thunkMiddleware from 'redux-thunk';

const middleware = [thunkMiddleware, apiMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
```
