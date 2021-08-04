// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
export type User = {
    type: 'authenticated-user' | 'guest';
    name: string;
    email?: string;
    registered: boolean;
}


