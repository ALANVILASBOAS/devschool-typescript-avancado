export interface SomeObject {
    a: string;
    b: number;
    c: boolean;
}

type a = SomeObject["a"]
type b = SomeObject["b"]
type c = SomeObject["c"]

export type keysOfObject = keyof SomeObject;


export type NullEverything<T> = {
    // readonly [K in keyof T]+?: T[K];
    [K in keyof T]: null;
    // [P in "a" | "b"]: null;
}

export type NullAllProps = NullEverything<SomeObject>


type BoolOptions = 'debug' | 'trace' | 'performance';
type StrOptions = 'application-name' | 'api-url';

type BoolConfig = { readonly [K in BoolOptions]: boolean };
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
