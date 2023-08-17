import { customerData } from '../types/customer/Data';

export async function getCustomersByUser(userId: string): Promise<customerData[]> {
  return [
    {
      'customerId': 1,
      'firstName': 'John',
      'lastName': 'Smith',
      'company': 'solutions.com',
      'email': 'johnsmith@gmail.com',
      'phone': '077245093',
      'source': 'exhibition',
      'state': 'contact',
      'tasks': [
        '198231987498',
        '182198309425',
        '128371987329',
      ],
    }
  ];
}