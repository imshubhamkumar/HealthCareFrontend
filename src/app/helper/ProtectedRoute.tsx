import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from './Auth';

const withProtectedRoute = (WrappedComponent: any) => {
    return (props: any) => {
        const { isAuthenticated } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/login'); // Redirect to login if not authenticated
            }
        }, [isAuthenticated, router]);

        // If not authenticated, render nothing or a loading state
        if (!isAuthenticated) return null;

        return <WrappedComponent {...props} />;
    };
};

export default withProtectedRoute;
