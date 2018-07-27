import React, { Component } from 'react';
import { compose, createStore, applyMiddleware } from 'react-redux';
import { createLogger } from 'react-logger';
import thunkMiddleware from 'react-thunk';

import reducer from '../redux/reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
const configureStore = (initialState) => {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );

    return createStore(reducer, initialState, enhancer)
};

export {
    configureStore
};
