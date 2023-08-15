import { createContext, useContext } from 'react';

export interface AuthContextInterface {
    isSigningUp: boolean;
    switchForm: () => void;
};

export const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
