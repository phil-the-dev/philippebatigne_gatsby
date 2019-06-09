/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
  webpack,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
}

exports.onPreBuild = () => {
  var modernizr = require("modernizr");

  modernizr.build({}, function (result) {
    console.log(result); // the build
  });
}