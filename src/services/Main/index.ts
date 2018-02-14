import autobind from 'autobind-decorator';

import BrowserAction from '../_typings_/IBrowserAction';
import Config from '../Config';

class Main {
  constructor(
    private browserAction: BrowserAction,
    private config: Config,
    private storage: Storage,
  ) {
    browserAction.onClicked.addListener(this.handleClick);
    storage.onChanged(this.handleStorageChanged);
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

export default Main;
