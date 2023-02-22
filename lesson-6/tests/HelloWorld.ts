import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { expect } from "chai"
import { ethers } from "hardhat"
import { HelloWorld } from "../typechain-types"

async function getOwnerSigner(contract: HelloWorld): Promise<SignerWithAddress> {
    const ownerAddress = await contract.owner()
    return await ethers.getSigner(ownerAddress)
}

async function getOwnerAddress(contract: HelloWorld): Promise<string> {
    return await contract.owner()
}

async function getSigners() {
    return await ethers.getSigners()
}

async function getDefaultDeployerSigner(): Promise<SignerWithAddress> {
    const signers = await getSigners()
    return signers[0]
}

describe("My Title", () => {

    let helloWorldContract: HelloWorld

    beforeEach(async () => {
        // Get the contract factory
        const helloWorldContractFactory = await ethers.getContractFactory("HelloWorld")
        
        // Deploy the factory contract
        helloWorldContract = await helloWorldContractFactory.deploy()
        
        // Wait for the contract to be deployed
        await helloWorldContract.deployed()
    })

    it('Should give a hello world', async () => {
        const text = await helloWorldContract.helloWorld()
        expect(text).to.equal("Hello World")
    })

    it('Should set owner to deployer account', async () => {
        const deployer = await getDefaultDeployerSigner()
        const owner = await getOwnerAddress(helloWorldContract)
        expect(owner).to.equal(deployer.address)
    })

    it("Should not allow non-owner to set owner", async () => {
        const signers = await getSigners()
        const notOwner = signers[1]

        await expect(
        helloWorldContract
            .connect(notOwner)
            .transferOwnership(notOwner.address)
        ).to.be.revertedWith("Caller is not the owner")
    })

    it("Should execute transferOwnership correctly", async function () {
        // Get a list of signers which ethers/hardhat makes available for us
        const signers = await getSigners()
        
        // Get the current owner of the contract
        const owner = await getOwnerSigner(helloWorldContract)
        
        // Grab the expected new owner from the signers list.
        const expectedNewOwner = signers[1].address

        // Transfer ownership by connecting with the current owner, and transferring to the expectedNewOwner
        await helloWorldContract
            .connect(owner)
            .transferOwnership(expectedNewOwner)

        // Now get the current owner after we have transferred ownership
        const updatedOwner = await helloWorldContract.owner()

        // Is the expectedNewOwner === updatedOwner
        expect(expectedNewOwner).to.equal(updatedOwner)
    })

    it("Should not allow anyone other than owner to change text", async function () {
        const signers = await getSigners()
        const notOwner = signers[1]

        await expect(helloWorldContract
            .connect(notOwner)
            .setText("New Text"))
        .to.be.revertedWith("Caller is not the owner")
    })
    
    it("Should change text correctly", async function () {
        const owner = await getOwnerSigner(helloWorldContract)
        const newText = "some new text"
        
        await helloWorldContract
            .connect(owner)
            .setText(newText)

        const updatedText = await helloWorldContract.text()
        expect(updatedText).to.equal(newText)
    })
})