// metro.config.js
const { getDefaultConfig } = require("metro-config");
const { config: dotEnvConfig } = require("dotenv");

dotEnvConfig();

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();

  return {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      extraNodeModules: {
        ...defaultConfig.resolver.extraNodeModules,
        "react-native-dotenv": require.resolve("./.env"),
      },
    },
  };
})();
