export interface IUserData {
  name: string;
  gender: string;
  birth: string;
}

export interface IGetUserData {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  dob: {
    date: Date;
  };
}
