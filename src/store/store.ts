import { rootReducer } from './root-reducer';
import { createAPI } from './../services/api';
import { configureStore } from '@reduxjs/toolkit';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});
