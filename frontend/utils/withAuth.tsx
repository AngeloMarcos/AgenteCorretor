// utils/withAuth.tsx
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function withAuth(Component: any) {
  return function ProtectedComponent(props: any) {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <Component {...props} /> : null;
  };
}
