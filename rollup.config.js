import path from 'path';

const s_CLIENT_PATH = './public';
const s_DEPLOY_PATH = './dist';
const s_SOURCEMAP = true;

export default () =>
{
   // Reverse relative path from the deploy path to local directory; used to replace source maps path.
   const relativeClientPath = path.relative(`${s_CLIENT_PATH}`, '.');
   const relativeServerPath = path.relative(`${s_DEPLOY_PATH}`, '.');

   return [{
      input: ['src/client/index.js'],
      output: [{
         file: `${s_CLIENT_PATH}${path.sep}foundry-iife.js`,
         format: 'iife',
         name: 'foundry',
         preferConst: true,
         sourcemap: s_SOURCEMAP,
         sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativeClientPath, `.`)
      },
      {
         file: `${s_CLIENT_PATH}${path.sep}foundry-esm.js`,
         format: 'esm',
         preferConst: true,
         sourcemap: s_SOURCEMAP,
         sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativeClientPath, `.`)
      }]
   },
   {
      input: ['src/server/index.js'],
      output: [{
         file: `${s_DEPLOY_PATH}${path.sep}server-esm.js`,
         format: 'esm',
         preferConst: true,
         sourcemap: s_SOURCEMAP,
         sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativeServerPath, `.`)
      }]
   }];
};
