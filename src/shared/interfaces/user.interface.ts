export interface IStore {
  id: number;
  name: string;
}

export interface IUserProfile {
  email: string;
  fullName: string;
  roles: string[];
  store: IStore,
  isActive: boolean;
}