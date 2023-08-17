import { createContext, useContext } from 'react';

export interface AppContextInterface {
    isSigningUp: boolean;
    switchForm: () => void;
};

export const AppContext = createContext<AppContextInterface | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
