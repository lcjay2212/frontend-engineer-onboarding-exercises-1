import create from 'zustand';

export interface UserLogInProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (e: boolean) => void;
}

const useUser = create(() => ({
  isLoggedIn: true,
}));

export default useUser;
