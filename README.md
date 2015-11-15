# Redux API Middlware

`redux-api-middleware` provides a middleware function to use as part of the `redux` dispatch chain. It is intended for use with the Meadow API promise library to provide a middleware to dispatch actions for `REQUEST`, `SUCCESS`, and `FAILURE`.

## Installation

`npm install @meadow/redux-api-middleware`

## Usage

```javascript
import apiMiddleware from '@meadow/redux-api-middleware';
import thunkMiddleware from 'redux-thunk';

const middleware = [thunkMiddleware, apiMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
```

```javascript
import {
  FETCH_ORGANIZATION_REQUEST,
  FETCH_ORGANIZATION_SUCCESS,
  FETCH_ORGANIZATION_FAILURE
} from './constants';
import { CALL_API } from '@meadow/redux-api-middleware';

export function fetchOrganization () {
  return (dispatch, getState) => {
    return dispatch({
      [CALL_API]: {
        types: [
          FETCH_ORGANIZATION_REQUEST,
          FETCH_ORGANIZATION_SUCCESS,
          FETCH_ORGANIZATION_FAILURE
        ],
        promise: Meadow.getOrganization()
      }
    });
  };
}
```
