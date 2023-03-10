import { AuthorizationStatus, NameSpace } from './../../../consts';
import { State } from './../../../types/state.model';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].AuthorizationStatus;
