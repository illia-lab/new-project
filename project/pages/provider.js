//@ts-check
const pajeProvider = {
  get main() {
    const {MainPaje} = require('../main/page')
    return new MainPaje()
} }