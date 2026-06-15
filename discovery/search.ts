import { getAllAgents } from "../identity/registry";

export function searchAgents(query: string) {
  return getAllAgents().filter((agent) =>
    agent.name.toLowerCase().includes(
      query.toLowerCase()
    )
  );
}
