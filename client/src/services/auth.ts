import axios from 'axios';

interface User {
    username: string,
    password: string
}

const loginUser = async (user: User) => { 
    const response = await axios.post('api/login', user)
    localStorage.setItem('user', JSON.stringify(response.data));
    return response;
};

const logout = () => localStorage.removeItem('user');

const signupUser = (user: User) => axios.post('api/signup', user);

const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    if (!user) return null;
    return JSON.parse(user);
};

export {
    loginUser,
    logout,
    signupUser,
    getCurrentUser
}