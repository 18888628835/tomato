export type LoginMessage = {
  account: string;
  password: string;
};

export type Registration = LoginMessage & {
  password_confirmation: string;
};
export type ParamsDispatch = {
  type: string;
  formData: any;
};
export type Params = {
  description?: string;
  aborted?: boolean;
};
