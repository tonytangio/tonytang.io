import { getCurrentUser } from './auth';

export const getAuthHeader = () => {
    const user = getCurrentUser();
    return (user && user.token) 
        ? { 'x-access-token': user.token } 
        : {}
}