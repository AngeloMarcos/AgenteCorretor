// context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface AuthContextData {
  isAuthenticated: boolean;
  login: (email: string, senha: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  function login(email: string, senha: string) {
    if (email === 'corretor@email.com' && senha === '123456') {
      localStorage.setItem('token', 'fake-token');
      setIsAuthenticated(true);
      router.push('/painel');
    } else {
      alert('Credenciais inválidas');
    }
  }

  function logout() {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    router.push('/login');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
