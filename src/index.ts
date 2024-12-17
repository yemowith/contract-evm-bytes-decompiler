import { JsonRpcProvider } from "ethers";
import { Contract } from "sevm";
import * as fs from "fs";

const provider = new JsonRpcProvider("https://rpcapi.fantom.network/");
//const bytes = fs.readFileSync("bytes.txt", "utf8");

function saveStringToFile(filePath: string, data: string): void {
  try {
    fs.writeFileSync(filePath, data, "utf8");
    console.log(`Data successfully saved to ${filePath}`);
  } catch (error) {
    console.error(`Error saving data to file: ${error}`);
  }
}

(async () => {
  const bytecode = await provider.getCode(
    "0x8b01d28F4fDDD89322711d832325f7eB1f122FB2"
  );
  const contract = new Contract(bytecode);
  saveStringToFile("solidity.sol", contract.solidify());
  //console.log(contract.abi);
  //console.log(contract.bytecode);
  //console.log(contract.deploymentBytecode);
  //console.log(contract.runtimeBytecode);
  //console.log(contract.metadata);
  //console.log(contract.sourceMap);
  //console.log(contract.opcodes);
  //console.log(contract.opcodesRuntime);
  //console.log(contract.opcodesMetadata);
  //console.log(contract.opcodesDeployment
})();
