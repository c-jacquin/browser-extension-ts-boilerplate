class Config {
  constructor(private storage: typeof browser.storage) {}

  public async loadInitialState(): Promise<void> {
    const storedState: any = await Promise.all([
      // this.storage.get('somthing'),
    ]);
  }
}

export default Config;
