/// <reference types="node" />
export interface ExecException extends Error {
    cmd?: string;
    killed?: boolean;
    code?: number;
    signal?: NodeJS.Signals;
}
export declare const get: (command: string, callback?: ((error: ExecException | null, data: string, stderr: string) => void) | undefined) => import("child_process").ChildProcess;

export declare const run: (command: string) => import("child_process").ChildProcess;
