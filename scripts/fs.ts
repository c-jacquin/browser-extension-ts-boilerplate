import * as fs from 'fs-extra';

export const copyAssets = (target: string): Promise<void[]> => {
  return Promise.all([
    fs.copy('src/icons', `build/${target}/icons`),
    fs.copy('src/views/options/index.html', `build/${target}/options.html`),
    fs.copy('src/views/popup/index.html', `build/${target}/popup.html`),
    fs.copy(
      'src/views/options/index.css',
      `build/${target}/styles/options.css`,
    ),
    fs.copy('src/views/popup/index.css', `build/${target}/styles/popup.css`),
  ]);
};

export const prepare = async (target: string): Promise<void> => {
  const exist = await fs.pathExists(`build/${target}`);

  if (exist) {
    return fs.remove(`build/${target}`);
  } else {
    return Promise.resolve();
  }
};
