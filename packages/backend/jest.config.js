module.exports = {
  bail: true,
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js?(x)'],
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },
}
