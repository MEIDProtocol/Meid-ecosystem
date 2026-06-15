export class SolanaResolver {
  resolve(address: string) {
    return {
      chain: "solana",
      address
    };
  }
}
