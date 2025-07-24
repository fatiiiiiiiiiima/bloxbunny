// withAuth.js

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from '../utils/firebase'; // Update the import

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          const params = new URLSearchParams();
          params.append('message', 'Please sign in to access the dashboard');
          // Redirect to the sign-in page with search parameters
          router.replace(`/signin?${params.toString()}`);
        }
      });

      return () => unsubscribe();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
