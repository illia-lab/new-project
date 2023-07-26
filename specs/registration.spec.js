//@ts-check
const {provider} = require('../project')
const {client, I} = provider
describe('test', () => {
  it('test it', async() => {
    await client.get('http://localhost:4000')
    await I.registerInSystem({
      username: 'admin1',
      password: 'admin1',
      personalname: 'admin1',
      email: 'admin1@admin1'
    })
    await client.sleep(15000)

})
})
