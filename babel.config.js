module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        include: [
          "@babel/plugin-transform-class-properties",
          "@babel/plugin-transform-private-property-in-object",
          "@babel/plugin-transform-class-static-block",
          "@babel/plugin-transform-private-methods",
        ],
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { version: "legacy" }],
    "@babel/plugin-transform-class-properties",
    "@babel/plugin-transform-private-methods",
    "@babel/plugin-transform-private-property-in-object",
    "@babel/plugin-transform-class-static-block",
  ],
};
