export class UserService {
    // Login function to authenticate users
    async login(userType, credentials) {
        try {
            const response = await fetch(`http://localhost:8080/api/login/${userType}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Invalid credentials');
            }

            return await response.json(); // Return backend response (e.g., token, success message)
        } catch (error) {
            throw new Error('Login failed: ' + error.message);
        }
    }
}

