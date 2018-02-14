import autobind from 'autobind-decorator';

import Config from '../Config';

class Background {
  constructor(
    private browserAction: typeof browser.browserAction,
    private config: Config,
    private storage: typeof browser.storage,
  ) {
    browserAction.onClicked.addListener(this.handleClick);
    storage.onChanged.addListener(this.handleStorageChanged);
  }

  public start() {
    // do something on startup
  }

  @autobind
  private async handleClick() {
    // do something
  }

  @autobind
  private handleStorageChanged(changes: any): void {
    // do something
  }
}

export default Background;
