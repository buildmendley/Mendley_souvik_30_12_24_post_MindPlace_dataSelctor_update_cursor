import { User } from '../types/auth';

const AUTH_KEY = 'mendley_auth';

export const saveUser = (user: User): void => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const getUser = (): User | null => {
  const data = localStorage.getItem(AUTH_KEY);
  return data ? JSON.parse(data) : null;
};

export const removeUser = (): void => {
  localStorage.removeItem(AUTH_KEY);
};