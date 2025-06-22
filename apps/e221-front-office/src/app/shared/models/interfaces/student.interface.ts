import { defaultStatus } from '../enums/status.enum';
import { Class } from './class.interface';

export interface Student {
  id: number;
  matriculate: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  class: Class
  status: defaultStatus;
  pictureUrl?: string;
  address?: string;
  registrationDate?: string;
  createdAt?: string;
  updatedAt?: string;
}
