export const changeSection = (
  action: number
): { type: string; payload: number } => {
  return { type: "CHANGE_SECTION", payload: action };
};

export const updateScrollings = (
  action: number[]
): { type: string; payload: number[] } => {
  return { type: "UPDATE_SCROLLINGS", payload: action };
};
