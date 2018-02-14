import * as Promise from 'bluebird';

global.Promise = Promise;

export const promisifyAll = (obj: {}, list: string[]) => {
  list.forEach(api => {
    Promise.promisifyAll(obj[api], {
      promisifier: method => {
        return (...args) => {
          return new Promise(resolve => {
            args.push(resolve);
            method.apply(this, args);
          });
        };
      },
    });

    /**
     * replace the old method with the new promisified ones
     */
    Object.keys(obj[api]).forEach(method => {
      if (method.endsWith('Async')) {
        obj[api][method.replace('Async', '')] = obj[api][method];
      }
    });
  });
};

export const getPlatform = () => chrome || browser;
