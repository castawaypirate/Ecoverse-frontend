import { IUserdata } from './userdata';

export interface IUser {
  id: number;
  username: string;
  role: string;
  data: IUserdata
}
