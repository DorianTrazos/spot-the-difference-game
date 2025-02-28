import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase-config';
import { AuthContext } from '../contexts/AuthContext';
import { getUser } from '../utils/auth';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getUser(setUser, setLoading);

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setUser(session?.user || null);
			}
		);

		return () => authListener.subscription.unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
