module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.(ts|vue)'],
  testMatch: [
    '**/*.spec.ts'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
    "vue"
  ],
}
