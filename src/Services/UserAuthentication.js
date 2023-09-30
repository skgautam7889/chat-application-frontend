const API_BASE_URL = "http://localhost:5000/api/";
const Signup = "signup";

// Header part
const headers = { 'Content-Type': 'application/json' };

export const UserAuthentication = {
    UserSignup: async (data) => {
        try {
            const response = await fetch(API_BASE_URL + Signup, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data),
            })
            const json = await response.json();
            return json;
        } catch (error) {
            console.log("first login failed", error)
        }
    }
}