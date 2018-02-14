import IListener from './IListener';

interface IStorageManager {
  get(key: string, cb: (data?: any) => any): void;
  set(data: any, cb: (data?: any) => any): void;
}

export default interface IPlatformStorage {
  local: IStorageManager;
  sync: IStorageManager;
  onChanged: IListener;
};
