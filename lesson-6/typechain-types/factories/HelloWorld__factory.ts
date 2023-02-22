/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HelloWorld, HelloWorldInterface } from "../HelloWorld";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "helloWorld",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newText",
        type: "string",
      },
    ],
    name: "setText",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "text",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020017f48656c6c6f20576f726c64000000000000000000000000000000000000000000815250600090816200005891906200031a565b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000401565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012257607f821691505b602082108103620001385762000137620000da565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001a27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000163565b620001ae868362000163565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620001fb620001f5620001ef84620001c6565b620001d0565b620001c6565b9050919050565b6000819050919050565b6200021783620001da565b6200022f620002268262000202565b84845462000170565b825550505050565b600090565b6200024662000237565b620002538184846200020c565b505050565b5b818110156200027b576200026f6000826200023c565b60018101905062000259565b5050565b601f821115620002ca5762000294816200013e565b6200029f8462000153565b81016020851015620002af578190505b620002c7620002be8562000153565b83018262000258565b50505b505050565b600082821c905092915050565b6000620002ef60001984600802620002cf565b1980831691505092915050565b60006200030a8383620002dc565b9150826002028217905092915050565b6200032582620000a0565b67ffffffffffffffff811115620003415762000340620000ab565b5b6200034d825462000109565b6200035a8282856200027f565b600060209050601f8311600181146200039257600084156200037d578287015190505b620003898582620002fc565b865550620003f9565b601f198416620003a2866200013e565b60005b82811015620003cc57848901518255600182019150602085019450602081019050620003a5565b86831015620003ec5784890151620003e8601f891682620002dc565b8355505b6001600288020188555050505b505050505050565b61099380620004116000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631f1bd6921461005c5780635d3a1f9d1461007a5780638da5cb5b14610096578063c605f76c146100b4578063f2fde38b146100d2575b600080fd5b6100646100ee565b604051610071919061043e565b60405180910390f35b610094600480360381019061008f91906104cf565b61017c565b005b61009e610222565b6040516100ab919061055d565b60405180910390f35b6100bc610248565b6040516100c9919061043e565b60405180910390f35b6100ec60048036038101906100e791906105a4565b6102da565b005b600080546100fb90610600565b80601f016020809104026020016040519081016040528092919081815260200182805461012790610600565b80156101745780601f1061014957610100808354040283529160200191610174565b820191906000526020600020905b81548152906001019060200180831161015757829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461020c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102039061067d565b60405180910390fd5b81816000918261021d92919061088d565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606000805461025790610600565b80601f016020809104026020016040519081016040528092919081815260200182805461028390610600565b80156102d05780601f106102a5576101008083540402835291602001916102d0565b820191906000526020600020905b8154815290600101906020018083116102b357829003601f168201915b5050505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461036a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103619061067d565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103e85780820151818401526020810190506103cd565b60008484015250505050565b6000601f19601f8301169050919050565b6000610410826103ae565b61041a81856103b9565b935061042a8185602086016103ca565b610433816103f4565b840191505092915050565b600060208201905081810360008301526104588184610405565b905092915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261048f5761048e61046a565b5b8235905067ffffffffffffffff8111156104ac576104ab61046f565b5b6020830191508360018202830111156104c8576104c7610474565b5b9250929050565b600080602083850312156104e6576104e5610460565b5b600083013567ffffffffffffffff81111561050457610503610465565b5b61051085828601610479565b92509250509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105478261051c565b9050919050565b6105578161053c565b82525050565b6000602082019050610572600083018461054e565b92915050565b6105818161053c565b811461058c57600080fd5b50565b60008135905061059e81610578565b92915050565b6000602082840312156105ba576105b9610460565b5b60006105c88482850161058f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061061857607f821691505b60208210810361062b5761062a6105d1565b5b50919050565b7f43616c6c6572206973206e6f7420746865206f776e6572000000000000000000600082015250565b60006106676017836103b9565b915061067282610631565b602082019050919050565b600060208201905081810360008301526106968161065a565b9050919050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026107397fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826106fc565b61074386836106fc565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061078a6107856107808461075b565b610765565b61075b565b9050919050565b6000819050919050565b6107a48361076f565b6107b86107b082610791565b848454610709565b825550505050565b600090565b6107cd6107c0565b6107d881848461079b565b505050565b5b818110156107fc576107f16000826107c5565b6001810190506107de565b5050565b601f82111561084157610812816106d7565b61081b846106ec565b8101602085101561082a578190505b61083e610836856106ec565b8301826107dd565b50505b505050565b600082821c905092915050565b600061086460001984600802610846565b1980831691505092915050565b600061087d8383610853565b9150826002028217905092915050565b610897838361069d565b67ffffffffffffffff8111156108b0576108af6106a8565b5b6108ba8254610600565b6108c5828285610800565b6000601f8311600181146108f457600084156108e2578287013590505b6108ec8582610871565b865550610954565b601f198416610902866106d7565b60005b8281101561092a57848901358255600182019150602085019450602081019050610905565b868310156109475784890135610943601f891682610853565b8355505b6001600288020188555050505b5050505050505056fea264697066735822122025fe003b8c10c2d85217abfbe8da45ca51633f20a07ec8f8329b1d3255d430dd64736f6c63430008110033";

type HelloWorldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorld__factory extends ContractFactory {
  constructor(...args: HelloWorldConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HelloWorld> {
    return super.deploy(overrides || {}) as Promise<HelloWorld>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  override connect(signer: Signer): HelloWorld__factory {
    return super.connect(signer) as HelloWorld__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldInterface {
    return new utils.Interface(_abi) as HelloWorldInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorld {
    return new Contract(address, _abi, signerOrProvider) as HelloWorld;
  }
}
