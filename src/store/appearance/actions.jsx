import store from './../index';
import { _setBackgraundColor, _setColor, _setFontSize } from '.';

export const setBackgraundColor = data => store.dispatch(_setBackgraundColor(data))
export const setColor = data => store.dispatch(_setColor(data))
export const setFontSize = data => store.dispatch(_setFontSize(data))




