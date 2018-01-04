/* global localStorage */
import config from './config';
const { localStorageKey } = config;

export function saveState(state) {
  console.log('Saving state');
  localStorage.setItem(
    localStorageKey, JSON.stringify( state )
  );
}

export function loadState() {
  const json = localStorage.getItem(localStorageKey);
  if(! json) {
    return null;
  }
  try {
    const state = JSON.parse(json);
    console.log('Loading state', state);
    return state;
  } catch(e) {
    console.error('Exception while parsing persisted state', e);
    clearState();
    return null;
  }
}

export function clearState() {
  localStorage.removeItem(localStorageKey);
}
