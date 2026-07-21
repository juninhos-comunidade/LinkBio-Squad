export interface HashProvider {
  hash(password: string): Promise<string>;
}
