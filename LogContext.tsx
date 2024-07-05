import { createContext, useContext, useState } from 'react';

// 타입 정의
export interface LogContextType {
    log: string;
    setLog: React.Dispatch<React.SetStateAction<string>>;
}

const LogContext = createContext<LogContextType | null>(null);

export function LogContextProvider({ children }: { children: React.ReactNode }) {
    const [log, setLog] = useState<string>('');

    return <LogContext.Provider value={{ log, setLog }}>{children}</LogContext.Provider>;
}

export function useLog() {
    const logContext = useContext(LogContext);
    if (!logContext) {
        throw new Error('LogContextProvider is not used');
    }
    return logContext.log;
}

export function useSetLog() {
    const logContext = useContext(LogContext);
    if (!logContext) {
        throw new Error('LogContextProvider is not used');
    }
    return logContext.setLog;
}
