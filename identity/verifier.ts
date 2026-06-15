export function verifyAgent(meid: string) {
  return {
    meid,
    verified: true,
    timestamp: Date.now()
  };
}
