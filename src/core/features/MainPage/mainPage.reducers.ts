import { ShowFormState } from "./mainPage.state";

const initialState: ShowFormState = {
  formStatus: ""
};

const reducer = (state = initialState, action): ShowFormState => {
  switch (action.type) {
    case "SEND_SUCCESS":
      return {
        formStatus: "success"
      };
    case "SEND_FAILED":
      return {
        formStatus: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
