import { AgentIdentity } from "./agent";

const registry: AgentIdentity[] = [];

export function registerAgent(agent: AgentIdentity) {
  registry.push(agent);
  return agent;
}

export function getAgent(meid: string) {
  return registry.find((a) => a.meid === meid);
}

export function getAllAgents() {
  return registry;
}
