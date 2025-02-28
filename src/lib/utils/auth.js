import { supabase } from '../../supabase/supabase-config';
import { saveUserData } from './database';

export const signInWithGoogle = async () => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			flow: 'implicit'
		}
	});

	const { error: insertError } = await supabase.from('usuarios').insert([
		{
			id: user.id,
			created_at: new Date().toISOString(),
			email: user.email,
			username: user.user_metadata.full_name || user.email.split('@')[0],
			level: 1,
			points: 0,
			total_attemps: 0,
			game_time: 0
		}
	]);

	if (insertError) throw insertError;

	if (error) {
		console.error('Error al iniciar sesión con Google:', error.message);
	} else {
		console.log('Autenticación exitosa:', data.user);
	}
};

export const getUser = async (setUser, setLoading) => {
	try {
		setLoading(true);

		const { data } = await supabase.auth.getUser();

		if (!data?.user) {
			setUser(null);
			return;
		}

		const user = data.user;

		await saveUserData(user);

		setUser(user);
	} finally {
		setLoading(false);
	}
};

export const signOut = async () => {
	try {
		await supabase.auth.signOut();
	} catch (err) {
		console.error('Error al cerrar sesión:', err.message);
	}
};
