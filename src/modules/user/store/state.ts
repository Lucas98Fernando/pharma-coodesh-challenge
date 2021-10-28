export interface IUserState {
  users: string[];
}

function state(): IUserState {
  return {
    users: [],
  };
}

export default state;
