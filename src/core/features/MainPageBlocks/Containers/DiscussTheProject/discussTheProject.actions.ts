export const saveErrors = (action: {}): { type: string; payload: {} } => {
  return { type: "SAVE_ERRORS", payload: action };
};

export const saveData = (action: {}): { type: string; payload: {} } => {
  return { type: "SAVE_DATA", payload: action };
};

export const resetAll = (): { type: string } => {
  return { type: "RESET_ALL" };
};
