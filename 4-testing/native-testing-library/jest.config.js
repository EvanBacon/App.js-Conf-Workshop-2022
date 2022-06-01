const expoPreset = require("jest-expo/jest-preset");
const jestPreset = require("@testing-library/react-native/jest-preset");

module.exports = Object.assign(expoPreset, jestPreset, {
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  moduleFileExtensions: ["tsx", "js"],
  setupFilesAfterEnv: [
    ...expoPreset.setupFiles,
    ...jestPreset.setupFiles,
    "@testing-library/jest-native/extend-expect",
    "@testing-library/react-native/cleanup-after-each",
  ],
});
