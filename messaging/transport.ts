export class Transport {
  async deliver(
    from: string,
    to: string,
    payload: string
  ) {
    return {
      delivered: true,
      from,
      to,
      payload
    };
  }
}
