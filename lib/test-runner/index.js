// @ts-check
const { isObject, toArray } = require('sat-utils');
const { attachFailedAplicationCondition } = require('../reporter');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const mochaIt = global.it;

const fixturesHolder = {};

/**
 * @typedef {() => Promise<void>|void}testCaseBody
 */

function wrapTestCaseBody(testCaseTitle, testCaseBodyCallBack) {
  return async function () {
    try {
      await testCaseBodyCallBack.call(this, fixturesHolder);
    } catch (error) {
      await attachFailedAplicationCondition(`FAILED ${testCaseTitle}`);
      throw error;
    }
  }.bind(this);
}

/**
 * @param {string} testCaseTitle test case title
 * @param {{tags: string|string[]}|testCaseBody} testCaseBodyCallBackOrOptions test case body
 * @param {testCaseBody} [testCaseBodyCallBack] test case body
 */

function it(testCaseTitle, testCaseBodyCallBackOrOptions, testCaseBodyCallBack) {
  // @ts-ignore
  const { tags } = argv;
  if (tags && arguments.length === 2) return;

  if (!isObject(testCaseBodyCallBackOrOptions)) {
    // @ts-ignore
    testCaseBodyCallBack = testCaseBodyCallBackOrOptions;
  } else {
    //@ts-ignore
    const { tags: testCaseTags } = testCaseBodyCallBackOrOptions;
    if (tags && testCaseTags) {
      const testCaseTagsArr = toArray(testCaseTags);
      const runArgTagArr = tags.toString().split(',');
      const doesTestCaseHaveRequiredTags = testCaseTagsArr.some(testCaseTag => runArgTagArr.includes(testCaseTag));
      if (!doesTestCaseHaveRequiredTags) {
        return;
      }
    }
  }
  mochaIt(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallBack));
}

/**
 * @param {string} testCaseTitle test case title
 * @param {{tags: string|string[]}|testCaseBody} testCaseBodyCallBackOrOptions test case body
 * @param {testCaseBody} testCaseBodyCallBack test case body
 */

it.only = function (testCaseTitle, testCaseBodyCallBackOrOptions, testCaseBodyCallBack) {
  if (!isObject(testCaseBodyCallBackOrOptions)) {
    // @ts-ignore
    testCaseBodyCallBack = testCaseBodyCallBackOrOptions;
  }
  mochaIt.only(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallBack));
};

it.initFixtures = function (fixturesData) {
  if (isObject(fixturesData)) {
    return Object.assign(fixturesHolder, fixturesData);
  }
  throw new TypeError('fixturesData should be an object');
};

module.exports = {
  it,
};
