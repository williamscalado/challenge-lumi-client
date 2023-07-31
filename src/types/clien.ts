export interface IClient {
  id?: number | undefined;
  client_number: string;
  name: string;
  address: string;
  createAt?: Date | string;
  updateAt?: Date | string;
}
