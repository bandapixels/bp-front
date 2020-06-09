import { DiscussTheProjectState } from "./discussTheProject.state";

const initialState: DiscussTheProjectState = {
  errors: {
    name: {
      error: false,
      step: 1
    },
    company: {
      error: false,
      step: 1
    },
    email: {
      error: false,
      step: 1
    },
    skype: {
      error: false,
      step: 1
    },
    task: {
      error: false,
      step: 1
    },
    projectType: {
      error: false,
      step: 2
    },
    budget: {
      error: false,
      step: 2
    }
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
        ...initialState
      };
    default:
      return state;
  }
};

export default reducer;
