// @ts-check
const { allure } = require('allure-mocha/runtime');

const { stepAllure } = require('./allure');
const { stepConsole } = require('./console');

/**
 *
 * @param {string} stepName stepName
 * @param {(...args: any[]) => Promise<any>} action action
 * @param  {...any[]} restArgs rest args
 * @returns {Promise<any>} exection result
 */

function step(stepName, action, ...restArgs) {
  if (process.argv.toString().includes('allure')) {
    return stepAllure(stepName, action, ...restArgs);
  }
  return stepConsole(stepName, action, ...restArgs);
}

module.exports = {
  step,
};
