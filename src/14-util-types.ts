export interface User {
    id?: string;
    name: string;
    email: string | null;
}

export type ConstantUser = Readonly<User>;

export type PartialUser = Partial<User>;

export type RequiredUser = Required<User>;

export type UserId = Pick<RequiredUser,  "email">;

export type InsertUser = Omit<User, "fdsfs">;

export type UsersById = Record<string, User>;


export function aLotOfArguments(a: string, b: number, c: boolean): boolean {
    return true;
}

type fn = (a: string, b: number, c: boolean) => boolean;

export type Arguments = Parameters<fn>;  // [string, number, boolean]

const fnArguments: Arguments = ["a", 2, true]; //? as const;

aLotOfArguments(fnArguments[0], fnArguments[1], fnArguments[2]); //?
