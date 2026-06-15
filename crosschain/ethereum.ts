export class EthereumResolver {
  resolve(address: string) {
    return {
      chain: "ethereum",
      address
    };
  }
}
