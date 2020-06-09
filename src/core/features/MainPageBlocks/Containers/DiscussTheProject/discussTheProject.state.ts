export interface DiscussTheProjectState {
  errors: {
    name: {
      error: boolean | string;
      step: number;
    };
    company: {
      error: boolean | string;
      step: number;
    };
    email: {
      error: boolean | string;
      step: number;
    };
    skype: {
      error: boolean | string;
      step: number;
    };
    task: {
      error: boolean | string;
      step: number;
    };
    projectType: {
      error: boolean | string;
      step: number;
    };
    budget: {
      error: boolean | string;
      step: number;
    };
  };
  data: {
    name: string;
    company: string;
    email: string;
    skype: string;
    task: string;
    projectType: string;
    budget: string;
  };
}
