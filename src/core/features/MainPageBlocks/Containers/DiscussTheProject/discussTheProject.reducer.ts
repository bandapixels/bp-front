import { DiscussTheProjectState } from "./discussTheProject.state";

const initialState: DiscussTheProjectState = {
  errors: {
    name: false,
    company: false,
    email: false,
    skype: false,
    task: false,
    projectType: false,
    budget: false
  },
  data: {
    name: "",
    company: "",
    email: "",
    skype: "",
    task: "",
    projectType: "",
    budget: ""
  }
};

const reducer = (state = initialState, action): DiscussTheProjectState => {
  switch (action.type) {
    case "SAVE_ERRORS":
      return {
        ...state,
        errors: action.payload
      };
    case "SAVE_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "RESET_ALL":
      return {
        errors: {
          name: false,
          company: false,
          email: false,
          skype: false,
          task: false,
          projectType: false,
          budget: false
        },
        data: {
          name: "",
          company: "",
          email: "",
          skype: "",
          task: "",
          projectType: "",
          budget: ""
        }
      };
    default:
      return state;
  }
};

export default reducer;
