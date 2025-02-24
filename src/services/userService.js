export default class UserService {
    // Login function to authenticate users
    async login(userType, credentials) {
        try {
            const response = await fetch(`http://localhost:8080/api/users/login/${userType}`, {
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

            const data = await response.json();

            // Store the token in localStorage
            localStorage.setItem('token', data.token);

            console.log("Login successful, token stored in localStorage:", data.token);

            // Redirect user to their respective dashboard
            window.location.href = data.redirect;

            return data; // Return response in case further handling is needed
        } catch (error) {
            throw new Error('Login failed: ' + error.message);
        }
    }

}

