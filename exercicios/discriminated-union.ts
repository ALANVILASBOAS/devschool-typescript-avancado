// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
export type User = Guest | AuthenticatedUser;

export type Guest = {
    type: 'guest';
    name: string;
    registered: false;
}

export type AuthenticatedUser = {
    type: 'authenticated-user';
    name: string;
    email: string;
    registered: true;
}

function user(user: User) {
    if(user.registered) {
        user
    } else {
        user
    }
}
