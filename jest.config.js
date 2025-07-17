module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(axios)/)', // ✅ permite transformarea axios
  ],
  moduleFileExtensions: ['js', 'jsx'],
};
