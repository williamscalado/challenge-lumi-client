export interface IBill {
  id?: number;
  client_number: number;
  expiration_date: Date;
  reference: Date;
  energy_unit: string;
  energy_price: number;
  energy_amount: number;
  energy_icms_unit: number;
  energy_icms_price: number;
  energy_icms_amount: number;
  energy_send_unit: number;
  energy_send_price: number;
  energy_send_amount: number;
  contribution_lighting: string;
  amount: number;
  create_at?: string;
  update_at?: string;
}

export interface IBillByClient {
  client: {
    id?: number | undefined;
    client_number: string;
    name: string;
    address: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    bill: IBill[];
  };
}
