export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  location: string;
  bio?: string;
  stack: string[];
  links: UserLinks;
  customLinks: CustomLink[];
  createdAt: string;
}

export interface UserLinks {
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

export interface CustomLink {
  id: string;
  title: string;
  url: string;
  icon?: string;
  order: number;
  active: boolean;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  token: string;
}
