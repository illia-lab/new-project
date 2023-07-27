//@ts-check
const mainFlows = require('./main')
const tablesFlows = require('./tables')
const {prettifyCamelCase} = require('sat-utils')

const initFlows = {
  ...mainFlows,
  ...tablesFlows
}

Object.keys(initFlows).forEach((flowName) => {
  const prettyName = prettifyCamelCase(flowName);
  const fn = initFlows[flowName];
  initFlows[flowName] = async function(...args) {
// TODO add logger/reporting system
    console.log(`I ${prettyName}`);
    return fn.call(this, ...args)
}
})



const I = {
...initFlows
}

module.exports = {
  I
}