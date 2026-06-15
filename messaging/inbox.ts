import { AgentMessage } from "./message";

const inbox: AgentMessage[] = [];

export function sendMessage(message: AgentMessage) {
  inbox.push(message);
  return message;
}

export function getMessages(agentId: string) {
  return inbox.filter(
    (msg) => msg.to === agentId
  );
}
