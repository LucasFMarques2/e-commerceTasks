module.exports = function(api) {
    api.cache(true);
    return {
      presets: [
        '@babel/preset-env', 
        '@babel/preset-react' 
      ],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              '@assets': './src/assets',
              '@components': './src/components',
              '@routes': './src/routes',
              '@pages': './src/pages',
              '@context': './src/context',
              '@services': './src/services',
              '@layouts': './src/layouts'
            }
          }
        ],
        '@babel/plugin-proposal-class-properties' 
      ]
    };
  };
  