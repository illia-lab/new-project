// @ts-check
const mochaIt = global.it;

function wrapTestCaseBody(testCaseTitle, testCaseBodyCallBack) {
  return async function () {
    try {
      await testCaseBodyCallBack.call(this);
    } catch (error) {
      console.log('First should be done our required logic');
      throw error;
    }
  }.bind(this);
}

/**
 *
 * @param {string} testCaseTitle test case title
 * @param {() => Promise<void>|void} testCaseBodyCallBack test case body
 */

function it(testCaseTitle, testCaseBodyCallBack) {
  mochaIt(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallBack));
}

it.only = function (testCaseTitle, testCaseBodyCallBack) {
  mochaIt.only(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallBack));
};

module.exports = {
  it,
};
