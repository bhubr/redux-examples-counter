/* global localStorage */

class Persist {

  save(storageKey, data) {
    console.log('Saving data', storageKey);
    localStorage.setItem(
      storageKey, JSON.stringify( data )
    );
  }

  load(storageKey) {
    const json = localStorage.getItem(storageKey);
    if(! json) {
      return null;
    }
    try {
      const data = JSON.parse(json);
      console.log('Loading ', storageKey, data);
      return data;
    } catch(e) {
      console.error('Exception while parsing persisted data', storageKey, e);
      this.clear(storageKey);
      return null;
    }
  }

  clear(storageKey) {
    console.log('Clearing ', storageKey);
    localStorage.removeItem(storageKey);
  }

}

const persist = new Persist();
export default persist;
