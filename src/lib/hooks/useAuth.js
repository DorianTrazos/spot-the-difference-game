import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useGame debe usarse dentro de un GameProvider');
	}
	return context;
};
