export const sendFormData = (action: {}): { type: string; payload: {} } => {
  return { type: "SEND_FORM_DATA", payload: action };
};

export const sendFormDataSuccess = (
  successStatus: string
): { type: string; payload: string } => {
  return { type: "SEND_SUCCESS", payload: successStatus };
};

export const sendFormDataFailed = (
  failureStatus: string
): { type: string; payload: string } => {
  return { type: "SEND_FAILED", payload: failureStatus };
};
