'use strict';

function isPromise (value) {
  return value && typeof value.then === 'function';
}

export const CALL_API = '@@meadow/CALL_API';

export default function apiMiddleware ({ dispatch }) {
  return next => action => {
    const definition = action[CALL_API];

    if (!definition) {
      return next(action);
    }

    const { types, meta, promise } = definition;
    const [REQUEST, SUCCESS, FAILURE] = types;

    if (!isPromise(promise)) {
      return next(action);
    }

    if (!Array.isArray(types) || types.length !== 3) {
      throw new Error('API requests must have exactly 3 action types');
    }

    dispatch({
      type: REQUEST,
      meta
    });

    return promise.then(data => {
      process.nextTick(() => dispatch({
        type: SUCCESS,
        payload: data,
        meta
      }));

      return data;
    }, err => {
      process.nextTick(() => dispatch({
        type: FAILURE,
        payload: err,
        error: true,
        meta
      }));
    });
  };
}
