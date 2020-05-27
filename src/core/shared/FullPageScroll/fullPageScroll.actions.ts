export const changeSection = (
  action: number
): { type: string; payload: number } => {
  return { type: "CHANGE_SECTION", payload: action };
};
