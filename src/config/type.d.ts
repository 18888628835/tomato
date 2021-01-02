export type LoginMessage = {
  account: string;
  password: string;
};

export type Registration = LoginMessage & {
  password_confirmation: string;
};
