import { randomUUID } from "node:crypto";

export interface UserProps {
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
  createdAt?: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      stack: props.stack ?? [],
      customLinks: props.customLinks ?? [],
    };
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this.props.name;
  }
  get email(): string {
    return this.props.email;
  }
  get passwordHash(): string {
    return this.props.passwordHash;
  }
  get avatar(): string | null | undefined {
    return this.props.avatar;
  }
  get role(): string {
    return this.props.role;
  }
  get location(): string {
    return this.props.location;
  }
  get bio(): string | null | undefined {
    return this.props.bio;
  }
  get stack(): string[] {
    return this.props.stack;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get customLinks(): any[] {
    return this.props.customLinks!;
  }
  get createdAt(): Date {
    return this.props.createdAt!;
  }
}
