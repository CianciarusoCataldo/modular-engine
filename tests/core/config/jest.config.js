/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/tests/test-suites/", "/tests/core/utils/"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
    "^@/(.*)$": "src/$1",
  },
  modulePathIgnorePatterns: ["/tests/test-suites/", "/tests/core/utils/"],
  preset: "ts-jest",
  rootDir: "../../../",
  setupFilesAfterEnv: ["./tests/core/utils/testSetup.js"],
  testPathIgnorePatterns: ["src/tests/test-suites/", "/tests/core/utils/"],
  testEnvironment: "jsdom",
  testMatch: ["**/tests/core/main.test.tsx"],
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.(js|jsx)?$": "babel-jest",
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/"],
  verbose: true,
};
