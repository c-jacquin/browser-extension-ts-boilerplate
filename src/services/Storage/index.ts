import IPlatformStorage from '../_typings_/IPlatformStorage';

class Storage {
  constructor(private platformStorage: IPlatformStorage) {}

  public get(key) {
    return new Promise(resolve => {
      this.platformStorage.local.get(key, resolve);
    });
  }

  public set(value) {
    return new Promise(resolve => {
      this.platformStorage.local.set(value, resolve);
    });
  }

  public onChanged(callback) {
    this.platformStorage.onChanged.addListener(callback);
  }
}

export default Storage;
