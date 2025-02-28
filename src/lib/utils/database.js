import { supabase } from '../../supabase/supabase-config';

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
				id: user.id, // Usamos el UUID de autenticación
				email: user.email,
				username: user.user_metadata.full_name || user.email.split('@')[0],
				level: 1,
				points: 0,
				total_attemps: 0
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
			.select('game_time, level, points')
			.eq('id', userId)
			.single();

		if (fetchError) throw fetchError;

		// Calcular los nuevos valores
		// const updatedGameTime = userStats.game_time + additionalSeconds;
		const updatedLevel = Math.max(userStats.level, newLevel); // Mantiene el nivel más alto
		const updatedPoints = userStats.points + newPoints;

		// Actualizar los valores en la base de datos
		const { error: updateError } = await supabase
			.from('users')
			.update({
				level: updatedLevel,
				points: updatedPoints
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
		const { data, error } = await supabase.from('users').select('*');

		if (error) throw error;

		setUsers(data);
	} catch (err) {
		console.error('Error al obtener usuarios:', err.message);
		setUsers([]);
	}
};
