export interface DiscussTheProjectInterface {
  name: {
    error: boolean | string;
    step: number;
    value: string;
  };
  company: {
    error: boolean | string;
    step: number;
    value: string;
  };
  email: {
    error: boolean | string;
    step: number;
    value: string;
  };
  skype: {
    error: boolean | string;
    step: number;
    value: string;
  };
  task: {
    error: boolean | string;
    step: number;
    value: string;
  };
  projectType: {
    error: boolean | string;
    step: number;
    value: string;
  };
  budget: {
    error: boolean | string;
    step: number;
    value: string;
  };
}

export const formInitialState = {
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
