import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchWithAuth } from '../utils/api';

interface User {
  id: number;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchWithAuth('/auth/profile', 'GET', undefined, token)
        .then((data) => setUser(data))
        .catch(() => logout());
    }
  }, []);

  const login = async (email: string, password: string) => {
    const { access_token } = await fetchWithAuth('/auth/login', 'POST', {
      email,
      password,
    });

    localStorage.setItem('token', access_token);

    const userData = await fetchWithAuth('/auth/profile', 'GET', undefined, access_token);
    setUser(userData);
    router.push('/painel');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
