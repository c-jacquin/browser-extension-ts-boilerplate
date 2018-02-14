import IListener from './IListener';

export interface IconConfig {
  path: {
    [key: number]: string;
  };
}

export default interface IBrowserAction {
  onClicked: IListener;

  setIcon: (config: IconConfig) => void;
};
