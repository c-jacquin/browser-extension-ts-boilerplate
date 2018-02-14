import { asClass, asValue, createContainer, InjectionMode } from 'awilix';

import Config from './Config';
import Main from './Main';
import Storage from './Storage';

import { getPlatform } from '../helpers/platform';

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

const platform = getPlatform();

container.register({
  browserAction: asValue(platform.browserAction),
  config: asClass(Config),
  main: asClass(Main),
  platformStorage: asValue(platform.storage),
  storage: asClass(Storage),
});

export default container;
