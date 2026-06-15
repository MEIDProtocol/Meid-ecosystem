import { Reputation } from "./reputation";

export function calculateReputation(
  completedTasks: number,
  successfulInteractions: number
): Reputation {

  const score =
    completedTasks * 2 +
    successfulInteractions * 3;

  return {
    meid: "",
    score,
    completedTasks,
    successfulInteractions
  };
}
