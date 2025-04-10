export default class UserService {
    async login(userType, credentials) {
        try {
            const response = await fetch(`http://localhost:3000/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userType, ...credentials }), // Include userType
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Invalid credentials');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = data.redirect;
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

}
