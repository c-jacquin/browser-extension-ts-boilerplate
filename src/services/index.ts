import {
  asClass,
  asValue,
  createContainer,
  InjectionMode,
  Lifetime,
} from 'awilix';

import Background from './Background';
import Config from './Config';

import { getPlatform, promisifyAll } from '../helpers';

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

const platform = getPlatform();

const asSingleton = <T>(Service) => {
  return asClass<T>(Service, {
    lifetime: Lifetime.SINGLETON,
  });
};

/**
 * firefox api already return promise, if on chrome promisify all api method
 */
if (chrome) {
  promisifyAll(chrome, ['tabs', 'windows', 'browserAction', 'contextMenus']);
  promisifyAll(chrome.storage, ['local']);
}

container.register({
  background: asSingleton(Background),
  config: asSingleton(Config),
});

/**
 * make all browser api injectable via awilix
 */
Object.keys(platform).forEach(api => {
  container.register(api, asValue(platform[api]));
});

export default container;
