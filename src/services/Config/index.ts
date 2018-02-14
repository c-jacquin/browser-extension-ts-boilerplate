import Storage from '../Storage';

class Config {
  constructor(private storage: Storage) {}

  public async loadInitialState(): Promise<void> {
    const storedState: any = await Promise.all([
      // this.storage.get('somthing'),
    ]);
  }
}

export default Config;
