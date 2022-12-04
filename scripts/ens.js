// // const resolveName = () => {
// //   return <div>ens</div>
// // }

// // const resolveAddress = () => {
// //   return <div>ens</div>
// // }

// const createMapping = async () => {
//   const {
//     ENS,
//     ENSRegistry,
//     PublicResolver,
//   } = require("@ensdomains/ens-contracts")

//   const ensRegistry = await ethers.getContractFactory("ENSRegistry")
//   await ensRegistry.deploy()
//   console.log("deployed!")

// }

// export default { createMapping }
import { namehash } from "ethers/lib/utils.js"
import { createRequire } from "module"

const require = createRequire(import.meta.url)

var ethers = require("ethers")
const node =
  "https://eth-goerli.g.alchemy.com/v2/8gdRDR1HhcEz9jYDD1YktpkBItIUHPrL"
const provider = new ethers.providers.WebSocketProvider(node)
// var provider = new ethers.providers.getDefaultProvider()
// ENS functionality is provided directly on the core provider objconst

var address = "0x1565d4e518a619997c1518cd2c801eFC516092C0"
var name = await provider.lookupAddress(address)
// // ethers.js automatically checks that the forward resolution matches.
console.log(name)
var tokenURI = await provider.getAvatar(name);

console.log(tokenURI);
// // ethers.js automatically checks that the forward resolution matches.
