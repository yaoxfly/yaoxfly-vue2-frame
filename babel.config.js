let transformRemoveConsolePlugin = [];
if (process.env.VUE_APP_CURRENT_MODE === "production") {
  transformRemoveConsolePlugin = [
    ["transform-remove-console", { exclude: ["error", "warn"] }]
  ];
}
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [...transformRemoveConsolePlugin]
};
