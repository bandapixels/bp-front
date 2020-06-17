import { DiscussTheProjectState } from "./discussTheProject.state";

const initialState: DiscussTheProjectState = {
  name: {
    error: false,
    step: 1,
    value: ""
  },
  company: {
    error: false,
    step: 1,
    value: ""
  },
  email: {
    error: false,
    step: 1,
    value: ""
  },
  skype: {
    error: false,
    step: 1,
    value: ""
  },
  task: {
    error: false,
    step: 1,
    value: ""
  },
  projectType: {
    error: false,
    step: 2,
    value: ""
  },
  budget: {
    error: false,
    step: 2,
    value: ""
  }
};

const reducer = (state = initialState, action): DiscussTheProjectState => {
  switch (action.type) {
    case "SAVE_DATA":
      return {
        ...action.payload
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
