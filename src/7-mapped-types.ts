export interface SomeObject {
    a: string;
    b: number;
    c: boolean;
}

export type keysOfObject = keyof SomeObject;


export type NullEverything<T> = {
    // [K in keyof T]: T[K];
    [K in keyof T]: null;
    // [P in "a" | "b"]: null;
}

export type NullAllProps = NullEverything<SomeObject>


type BoolOptions = 'debug' | 'trace' | 'performance';
type StrOptions = 'application-name' | 'api-url';

type BoolConfig = { [K in BoolOptions]: boolean };
type StrConfig = { [K in StrOptions]: string };

type Config = BoolConfig & StrConfig;

const config: Config = {
    debug: true,
    trace: true,
    performance: true,
    "api-url": "http://localhost:8080",
    "application-name": "TS",
}


export type ActionType = 'fight' | 'move' | 'stop';

export type Action = {
    type: ActionType;
}

export type ActionsByType = {
    [key in ActionType]: Action;
}
