const Artwork = artifacts.require("./Artwork.sol")

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Artwork', (accounts) => {

    let contract

    //container for tests
    describe('deployment', async() => {
        //smoke test for deployment
        it('deployed successfully', async () => {
            contract = await Artwork.deployed()
            const address = contract.address
            console.log(address)
            assert.notEqual(address, '')
        })
    })
})