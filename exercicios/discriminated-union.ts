// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
export type User = AuthenticatedUser | Guest;
export interface AuthenticatedUser {
    type: 'authenticated-user';
    name: string;
    email: string;
    registered: true;
}

export interface Guest {
    type: 'guest';
    name: string;
    registered: false;
}
