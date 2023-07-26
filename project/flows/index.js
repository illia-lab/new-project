//@ts-check
const mainFlows = require('./main')
const {prettifyCamelCase} = require('sat-utils')

const initFlows = {
  ...mainFlows
}

Object.keys(initFlows).forEach((flowName) => {
  const prettyName = prettifyCamelCase(flowName);
  const fn = initFlows[flowName];
  initFlows[flowName] = async function(...args) {
// TODO add logger/reporting system
    console.log(`I ${prettyName}e`);
    return fn.call(this, ...args)
}
})



const I = {
...mainFlows
}

module.exports = {
  I
}