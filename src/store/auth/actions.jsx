import { _setCurrentAccount } from '.';
import store from './../index';

export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))
