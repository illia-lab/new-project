// @ts-check
const { stepAllure, attachFailedAplicationConditionAllure } = require('./allure');
const { stepConsole, attachFailedAplicationConditionConsole } = require('./console');
const { LOG_ALL } = process.env;
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

/**
 *
 * @param {new (...args: any[]) => any} classToDecorate classToDecorate
 * @param {string} methodName
 * @param {(...args: any[]) => string} messageFn
 */

function decorateBase(classToDecorate, methodName, messageFn) {
  if (!LOG_ALL) {
    return;
  }
  const methodDescriptior = Object.getOwnPropertyDescriptor(classToDecorate.prototype, methodName);
  const originalMethodImplementation = methodDescriptior.value;

  const decorated = async function (...args) {
    const originalCallable = originalMethodImplementation.bind(this, ...args);
    const prettyName = messageFn(this.name);
    return step(prettyName, originalCallable, ...args);
  };

  Object.defineProperty(decorated, 'name', { value: methodName });
  methodDescriptior.value = decorated;
  Object.defineProperty(classToDecorate.prototype, methodName, methodDescriptior);
}

async function attachFailedAplicationCondition(title) {
  await step(title, () => {
    if (process.argv.toString().includes('allure')) {
      return attachFailedAplicationConditionAllure(title);
    }
    return attachFailedAplicationConditionConsole(title);
  });
}

module.exports = {
  step,
  decorateBase,
  attachFailedAplicationCondition,
};
