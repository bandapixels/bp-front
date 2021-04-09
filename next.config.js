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
    env: {
      APP_HOSTNAME: process.env.APP_HOSTNAME
    }
}); 
