// require.resolve, not the bare specifier: ESLint's shareable-config naming convention
// rewrites "@repo/config/eslint-preset.js" to "@repo/eslint-config-config/eslint-preset.js"
// and then cannot find it. Resolving through Node hands ESLint a real path instead.
module.exports = {
  extends: [require.resolve("@repo/config/eslint-preset.js")],
};
