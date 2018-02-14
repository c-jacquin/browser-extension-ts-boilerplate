interface IFilter {
  urls: string[];
}

export default interface IListener {
  addListener: (
    cb: (response?: any) => any,
    filters?: IFilter,
    types?: string[],
  ) => void;
  removeListener: (cb: (response?: any) => any) => void;
};
