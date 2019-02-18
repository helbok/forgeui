module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/tests/setup.ts"],
  moduleNameMapper: {
    "^forgeui$": "<rootDir>/src/index.ts",
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
};
