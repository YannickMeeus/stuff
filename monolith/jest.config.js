const config = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "\\**.test\\.ts$",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/**/*.d.ts"],
  setupFilesAfterEnv: ["<rootDir>/__tests__/lifecycle/setup.ts", "jest-extended/all"],
  maxWorkers: 1
};

module.exports = config;
