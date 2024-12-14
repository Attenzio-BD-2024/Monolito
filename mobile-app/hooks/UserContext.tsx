import React, { useState, createContext, useContext } from 'react';

interface User{
    token: string | null;
    name: string | null;
    email: string | null;
}

interface UserContextProps{
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User>({
        token: null,
        name: null,
        email: null,
    });

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error('useUser debe estar dentro del proveedor UserProvider');
    }
    return context;
}