import supabase from './supabase.js';

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('loginError');

    try {
        // 1. Autenticación con Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;

        // 2. Verificar rol del usuario en tu tabla personalizada
        const { data: user, error: userError } = await supabase
            .from('usuarios')
            .select('rol')
            .eq('email', email)
            .single();

        if (userError) throw userError;
        
        // 3. Solo permitir acceso a admin/empleado
        if (!['admin', 'empleado'].includes(user.rol)) {
            await supabase.auth.signOut();
            throw new Error('No tienes permisos para acceder');
        }

        // 4. Redirección exitosa
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error('Error de login:', error);
        errorElement.textContent = 'Credenciales incorrectas o sin permisos';
        errorElement.classList.remove('d-none');
    }
});