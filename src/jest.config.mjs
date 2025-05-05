export default {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
