import { customerState } from './State';

export interface customerData     {
  customerId: number,
  firstName: string,
  lastName: string,
  company: string,
  email: string,
  phone: string,
  source: string,
  state: customerState,
  tasks: string[]
}