import React, { useState, createContext, useContext } from 'react';

interface User {
    id: number;
    username: string;
}

interface AuthcontextValue {
    user: User | null;
    setUser(user: User): void;
}

const Authcontext = createContext<AuthcontextValue | null>(null);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    return <Authcontext.Provider value={{ user, setUser }}>{children}</Authcontext.Provider>;
}

export function useAuth() {
    const auth = useContext(Authcontext);
    // auth의 유효성 검사해줘야 useAuth의 반환값 타입이 AuthContextValue로 됨
    if (!auth) {
        throw new Error('AuthContextProvider is not used'); // throw 하여 null 타입 제외
    }
    return auth;
}
