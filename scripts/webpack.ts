import * as webpack from 'webpack';

export default (config: any): Promise<void> => {
  return new Promise(resolve => {
    webpack(config, () => {
      resolve();
    });
  });
};
