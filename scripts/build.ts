import { zip } from 'node-zip-dir';

import * as webpackConfig from '../webpack.config';
import { copyAssets, prepare } from './fs';
import { formatManifest } from './manifest';
import webpack from './webpack';

(async () => {
  const target = process.env.TARGET;

  try {
    await prepare(target);
    await copyAssets(target);
    await formatManifest(target);
    await webpack(webpackConfig);
    await zip(`build/${target}`, `build/${target}.zip`);
  } catch (err) {
    /* tslint:disable */
    console.log('-----------------ERROR----------------------');
    console.error(err);
    /* tslint:enable */
  }
})();
