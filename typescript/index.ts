export class MEIDClient {

  async resolve(meid: string) {
    return {
      meid,
      verified: true
    };
  }

  async reputation(meid: string) {
    return {
      meid,
      score: 95
    };
  }

  async sendMessage(
    from: string,
    to: string,
    message: string
  ) {
    return {
      success: true,
      from,
      to,
      message
    };
  }
}
