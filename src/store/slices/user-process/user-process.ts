import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProcessState } from './../../../types/state.model';
import { AuthorizationStatus, NameSpace } from './../../../consts';

const initialState: UserProcessState = {
  AuthorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    loadAuthorizationStatus: (
      state,
      action: PayloadAction<AuthorizationStatus>,
    ) => {
      state.AuthorizationStatus = action.payload;
    },
  },
});

export const { loadAuthorizationStatus } = userProcess.actions;
