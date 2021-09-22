/* eslint-disable */
const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  cssModules: true,
  ignoreOrder: true,
  cssLoaderOptions: {
    getLocalIdent: (loaderContext, localIdentName, localName) => {
      const fileName = path.basename(loaderContext.resourcePath);
      if (fileName.indexOf('component.scss') < 0) {
        return localName;
      }

      const name = fileName.replace(/\.[^/.]+$/, '');
      return `${name}__${localName}`;
    },
  },
  routes: {
    '/careers': { page: '/careers'},
    '/careers/0': { page: '/careers/[id]'},
    '/careers/1': { page: '/careers/[id]'},
    '/careers/2': { page: '/careers/[id]'},
    '/careers/3': { page: '/careers/[id]'}
  }
}); 
