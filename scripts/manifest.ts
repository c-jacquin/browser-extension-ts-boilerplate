import * as fs from 'fs-extra';
import * as path from 'path';

export const formatManifest = async (target: string): Promise<void> => {
  const manifestPath = path.join(
    process.cwd(),
    `build/${target}/manifest.json`,
  );

  let manifestData = await fs.readJSON(
    path.join(process.cwd(), 'manifest.json'),
  );

  if (target === 'firefox') {
    manifestData = {
      ...manifestData,
      applications: {
        gecko: {
          id: 'my-app-id@mozilla.org',
        },
      },
    };
  }

  return fs.outputJSON(manifestPath, manifestData, {
    spaces: 2,
  });
};
