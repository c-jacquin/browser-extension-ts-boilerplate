import container from './services';
import Config from './services/Config';
import Main from './services/Main';

(async () => {
  const config = container.resolve<Config>('config');
  const main = container.resolve<Main>('main');

  await config.loadInitialState();

  main.start();
})();
