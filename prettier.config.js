module.exports = {
  plugins: [
    import("prettier-plugin-tailwindcss"),
    import("prettier-plugin-xml"),
  ],
  overrides: [
    {
      files: "*.xml",
      options: {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        trailingComma: "none",
        bracketSpacing: true,
        arrowParens: "avoid",
      },
    },
  ],
};
