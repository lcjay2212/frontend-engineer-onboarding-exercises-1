export const token = {
  getAuthToken: (bearer: string): void => localStorage.setItem('token', bearer),
  removeAuthToken: (): void => localStorage.removeItem('token'),
};
