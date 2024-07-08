import { createContext, useContext, useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

// 타입 정의
export interface Log {
    id: string;
    title: string;
    body: string;
    date: string;
}

export interface LogContextType {
    logs: Log[];
    setLogs: React.Dispatch<React.SetStateAction<Log[]>>;
}

const LogContext = createContext<LogContextType | null>(null);

export function LogContextProvider({ children }: { children: React.ReactNode }) {
    // const [logs, setLogs] = useState<Log[]>([]);
    const [logs, setLogs] = useState<Log[]>(
        Array.from({ length: 10 }).map((_, index) => ({
            id: uuidv4(),
            title: `Log ${index}`,
            body: `Log ${index} body`,
            date: new Date().toISOString(),
        })),
    );

    return <LogContext.Provider value={{ logs, setLogs }}>{children}</LogContext.Provider>;
}

export function useLogs() {
    const logContext = useContext(LogContext);
    if (!logContext) {
        throw new Error('LogContextProvider is not used');
    }
    return logContext.logs;
}

export function useSetLogs() {
    const logContext = useContext(LogContext);
    if (!logContext) {
        throw new Error('LogContextProvider is not used');
    }
    return logContext.setLogs;
}
