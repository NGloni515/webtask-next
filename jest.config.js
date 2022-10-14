  const frontend = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]', '<rootDir>/__tests__/api/*'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/_mocks_/fileMock.js',
      // replicate path mappings as in tsconfig.json
      '^~lib/(.*)$': '<rootDir>/lib/$1',
      '^~components/(.*)$': '<rootDir>/components/$1',
    }
  };

  const backend = {
    ...frontend,
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]', '<rootDir>/__tests__/ui/*']
  };

  let config = {};

  if(process.argv[4].split("=")[1]=="frontend"){
    config = frontend;
  }else{
    config = backend;
  }

  module.exports = config;