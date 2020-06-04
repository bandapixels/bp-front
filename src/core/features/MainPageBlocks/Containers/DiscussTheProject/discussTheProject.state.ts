export interface DiscussTheProjectState {
  errors: {
    name: boolean;
    company: boolean;
    email: boolean;
    skype: boolean;
    task: boolean;
    projectType: boolean;
    budget: boolean;
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
