export interface CreateUserInDTO {
  name: string;
  email: string;
  password: string;
  avatar?: string | null;
  role: string;
  location: string;
  bio?: string | null;
  stack: string[];
}

export interface CreateUserOutDTO {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  avatar?: string | null;
  role: string;
  location: string;
  bio?: string | null;
  stack: string[];
  //   TODO: Criar uma interface para o objeto CustomLink
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customLinks?: any[];
  createdAt: Date;
}
