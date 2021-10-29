// DTO = Data Transfer Object, aqui eu defino os tipos de cada entrada de dados, utilizando as interfaces, com isso, fica mais fácil de evitar problemas no futuro com relação a tipagens
export interface IUserData {
  fullName: string;
  title: string;
  gender: string;
  birth: string;
  email: string;
  pictureMedium: string;
  phone: string;
  nationality: string;
  address: string;
  country: string;
  identification: string;
}

export interface IGetUserData {
  name: {
    first: string;
    last: string;
    title: string;
  };
  gender: string;
  dob: {
    date: Date;
  };
  email: string;
  picture: {
    medium: string;
  };
  phone: string;
  nat: string;
  location: {
    city: string;
    country: string;
    street: {
      name: string;
      number: number;
    };
  };
  id: {
    name: string;
    value: number;
  };
}
