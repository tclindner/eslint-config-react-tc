const {ESLint} = require('eslint');
const isPlainObj = require('is-plain-obj');
const eslintConfig = require('../index');

const lintFile = async (files) => {
  const linter = new ESLint();
  const results = await linter.lintFiles(files);
  const errorMessages = results[0].messages;
  const error = errorMessages[0];

  return error;
};

describe('eslint config tests', () => {
  describe('eslint object', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig)).toBe(true);
    });
  });

  describe('parserOptions', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig.parserOptions)).toBe(true);
    });
  });

  describe('env', () => {
    test('should be an array', () => {
      expect(isPlainObj(eslintConfig.env)).toBe(true);
    });
  });

  describe('rules', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig.rules)).toBe(true);
    });
  });

  describe('run eslint and make sure it runs', () => {
    test('eslint should run without failing', async () => {
      const file = `./test/fixtures/component.tsx`;
      const expectedErrorLineNum = 1;
      const expectedErrorColumnNum = 21;
      const error = await lintFile(file);

      expect(error.ruleId).toStrictEqual('react/react-in-jsx-scope');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.nodeType).toStrictEqual('JSXOpeningElement');
    });
  });
});
