const chai = require('chai');
const isPlainObj = require('is-plain-obj');
const eslintConfig = require('../index.js');
const lint = require('./helper/testHelper.js');

const should = chai.should();

describe('eslint config tests', () => {
  context('eslint object', () => {
    it('should be an object', () => {
      isPlainObj(eslintConfig).should.equal(true);
    });
  });

  context('parserOptions', () => {
    it('should be an object', () => {
      isPlainObj(eslintConfig.parserOptions).should.equal(true);
    });
  });

  context('env', () => {
    it('should be an array', () => {
      isPlainObj(eslintConfig.env).should.equal(true);
    });
  });

  context('rules', () => {
    it('should be an object', () => {
      isPlainObj(eslintConfig.rules).should.equal(true);
    });
  });

  context('run eslint and make sure it runs', () => {
    it('eslint should run without failing', () => {
      const code = '<Panel className="test" />';
      const expectedErrorLineNum = 1;
      const expectedErrorColumnNum = 1;
      const errors = lint(code, eslintConfig);
      const error = errors[0];

      console.log(errors);

      error.ruleId.should.equal('react/react-in-jsx-scope');
      error.line.should.equal(expectedErrorLineNum);
      error.column.should.equal(expectedErrorColumnNum);
      error.source.should.equal('<Panel className="test" />');
    });
  });
});
