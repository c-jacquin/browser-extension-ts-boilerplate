import container from './services';
import Background from './services/Background';
import Config from './services/Config';

(async () => {
  const config = container.resolve<Config>('config');
  const background = container.resolve<Background>('background');

  await config.loadInitialState();

  background.start();
})();
