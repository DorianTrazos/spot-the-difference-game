import { supabase } from '../../supabase/supabase-config';

export const getUserData = async (userId, setUser) => {
	try {
		// Obtener los datos del usuario desde la base de datos
		const { data: user, error } = await supabase
			.from('users')
			.select('*')
			.eq('id', userId)
			.single();

		if (error) throw error;

		// Actualizar el estado con los datos obtenidos
		setUser(user);
		console.log('Datos del usuario cargados con éxito.');
	} catch (err) {
		console.error('Error al obtener los datos del usuario:', err.message);
	}
};

export const saveUserData = async user => {
	// Verificar si el usuario ya existe en la base de datos
	const { data: existingUser, error: fetchError } = await supabase
		.from('users')
		.select('id')
		.eq('id', user.id)
		.single();

	if (!existingUser) {
		// Si el usuario no existe, lo insertamos
		const { error: insertError } = await supabase.from('users').insert([
			{
				id: user.id,
				email: user.email,
				username: user.user_metadata.full_name || user.email.split('@')[0],
				max_level: 1,
				max_points: 0,
				total_attempts: 1
			}
		]);

		if (insertError)
			console.error('Error al registrar usuario:', insertError.message);
	}
};

export const updateGameStats = async (userId, newLevel, newPoints) => {
	try {
		// Obtener los datos actuales del usuario
		const { data: userStats, error: fetchError } = await supabase
			.from('users')
			.select('max_level, max_points, total_attempts')
			.eq('id', userId)
			.single();

		if (fetchError) throw fetchError;

		// Calcular los nuevos valores
		const updatedLevel =
			newLevel > userStats.max_level ? newLevel : userStats.max_level;
		const updatedPoints =
			newPoints > userStats.max_points ? newPoints : userStats.max_points;
		const updatedAttempts = userStats.total_attempts + 1; // Sumar 1 intento

		// Actualizar la base de datos
		const { error: updateError } = await supabase
			.from('users')
			.update({
				max_level: updatedLevel,
				max_points: updatedPoints,
				total_attempts: updatedAttempts
			})
			.eq('id', userId);

		if (updateError) throw updateError;

		console.log('Estadísticas actualizadas con éxito.');
	} catch (err) {
		console.error('Error al actualizar estadísticas:', err.message);
	}
};

export const getAllUsers = async setUsers => {
	try {
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.order('max_points', { ascending: false });

		if (error) throw error;

		setUsers(data.slice(0, 3));
	} catch (err) {
		console.error('Error al obtener usuarios:', err.message);
		setUsers([]);
	}
};
