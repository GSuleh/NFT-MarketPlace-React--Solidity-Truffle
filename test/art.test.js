const Artwork = artifacts.require("./Artwork.sol")

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Artwork', (accounts) => {

    let contract

    before(async () => {
        contract = await Artwork.deployed()
    })

    //container for tests
    describe('deployment', async() => {
        //smoke test for deployment
        it('deployed successfully', async () => {
            const address = contract.address
            console.log(address)
            assert.notEqual(address, 0x0)
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
            assert.notEqual(address, '')
        })

        it('Has a name', async () => {
            const name = await contract.name()
            assert.equal(name, 'Artwork')
        })
    })
})