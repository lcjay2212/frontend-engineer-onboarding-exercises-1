import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const useAuth = (): {
  isLoggedIn: () => void;
  token: string;
} => {
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('token') ?? '');
  }, []);

  const router = useRouter();
  const isLoggedIn = (): void => {
    const token = localStorage.getItem('token');

    if (!token) {
      void router.push('/login');
    }
  };

  return { isLoggedIn, token };
};

export default useAuth;
